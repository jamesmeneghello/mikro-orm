import { Reference } from '../entity/Reference';
import { Utils } from './Utils';
import type { AnyEntity, Dictionary, EntityMetadata, EntityProperty, FilterDef, ObjectQuery, FilterQuery } from '../typings';
import { ARRAY_OPERATORS, GroupOperator } from '../enums';
import type { Platform } from '../platforms';
import type { MetadataStorage } from '../metadata/MetadataStorage';
import { JsonType } from '../types';

export class QueryHelper {

  static readonly SUPPORTED_OPERATORS = ['>', '<', '<=', '>=', '!', '!=', ':in', ':nin', ':gt', ':gte', ':lt', ':lte', ':ne', ':not'];

  static processParams(params: any): any {
    if (Reference.isReference(params)) {
      params = params.unwrap();
    }

    if (Utils.isEntity(params)) {
      return params.__helper!.__primaryKeyCond;
    }

    if (params === undefined) {
      return null;
    }

    if (Array.isArray(params)) {
      return params.map(item => QueryHelper.processParams(item));
    }

    if (Utils.isPlainObject(params)) {
      QueryHelper.processObjectParams(params);
    }

    return params;
  }

  static processObjectParams(params: Dictionary = {}): any {
    Object.keys(params).forEach(k => {
      params[k] = QueryHelper.processParams(params[k]);
    });

    return params;
  }

  static inlinePrimaryKeyObjects<T extends AnyEntity<T>>(where: Dictionary, meta: EntityMetadata<T>, metadata: MetadataStorage, key?: string): boolean {
    if (Array.isArray(where)) {
      where.forEach((item, i) => {
        if (this.inlinePrimaryKeyObjects(item, meta, metadata, key)) {
          where[i] = Utils.getPrimaryKeyValues(item, meta.primaryKeys, false);
        }
      });
    }

    if (!Utils.isPlainObject(where)) {
      return false;
    }

    if (meta.primaryKeys.every(pk => pk in where) && Utils.getObjectKeysSize(where) === meta.primaryKeys.length) {
      return !GroupOperator[key as string] && Object.keys(where).every(k => !Utils.isPlainObject(where[k]) || Object.keys(where[k]).every(v => !Utils.isOperator(v, false)));
    }

    Object.keys(where).forEach(k => {
      const meta2 = metadata.find(meta.properties[k]?.type) || meta;

      if (this.inlinePrimaryKeyObjects(where[k], meta2, metadata, k)) {
        where[k] = Utils.getPrimaryKeyValues(where[k], meta2.primaryKeys, true);
      }
    });

    return false;
  }

  static processWhere<T>(where: FilterQuery<T>, entityName: string, metadata: MetadataStorage, platform: Platform, convertCustomTypes = true, root = true): FilterQuery<T> {
    const meta = metadata.find<T>(entityName);

    // inline PK-only objects in M:N queries so we don't join the target entity when not needed
    if (meta && root) {
      QueryHelper.inlinePrimaryKeyObjects(where as Dictionary, meta, metadata);
    }

    where = QueryHelper.processParams(where) || {};

    if (!root && Utils.isPrimaryKey<T>(where)) {
      return where;
    }

    if (meta && Utils.isPrimaryKey(where, meta.compositePK)) {
      where = { [Utils.getPrimaryKeyHash(meta.primaryKeys)]: where } as ObjectQuery<T>;
    }

    if (Array.isArray(where) && root) {
      const rootPrimaryKey = meta ? Utils.getPrimaryKeyHash(meta.primaryKeys) : entityName;
      return { [rootPrimaryKey]: { $in: (where as ObjectQuery<T>[]).map(sub => QueryHelper.processWhere(sub, entityName, metadata, platform, convertCustomTypes, false)) } } as ObjectQuery<T>;
    }

    if (!Utils.isPlainObject(where)) {
      return where;
    }

    return Object.keys(where as Dictionary).reduce((o, key) => {
      let value = where![key];
      const prop = meta?.properties[key];
      const keys = prop?.joinColumns?.length ?? 0;
      const composite = keys > 1;

      if (key in GroupOperator) {
        o[key] = value.map((sub: any) => QueryHelper.processWhere<T>(sub, entityName, metadata, platform, convertCustomTypes, false));
        return o;
      }

      // wrap top level operators (except $not) with PK
      if (Utils.isOperator(key) && root && meta && key !== '$not') {
        const rootPrimaryKey = Utils.getPrimaryKeyHash(meta.primaryKeys);
        o[rootPrimaryKey] = { [key]: QueryHelper.processWhere<T>(value, entityName, metadata, platform, convertCustomTypes, false) };
        return o;
      }

      if (prop?.customType && convertCustomTypes && !platform.isRaw(value)) {
        value = QueryHelper.processCustomType<T>(prop, value, platform, undefined, true);
      }

      if (prop?.customType instanceof JsonType && Utils.isPlainObject(value) && !platform.isRaw(value)) {
        return this.processJsonCondition(o, value, [prop.fieldNames[0]], platform);
      }

      if (Array.isArray(value) && !Utils.isOperator(key) && !QueryHelper.isSupportedOperator(key) && !key.includes('?')) {
        if (platform.allowsComparingTuples()) {
          // comparing single composite key - use $eq instead of $in
          const op = !value.every(v => Array.isArray(v)) && composite ? '$eq' : '$in';
          o[key] = { [op]: value };
        } else {
          if (!value.every(v => Array.isArray(v)) && composite) {
            o[key] = { $in: [value] };
          } else {
            o[key] = { $in: value };
          }
        }

        return o;
      }

      const re = '[^:]+(' + this.SUPPORTED_OPERATORS.filter(op => op.startsWith(':')).map(op => `${op}`).join('|') + ')$';
      const operatorExpression = new RegExp(re).exec(key);

      if (Utils.isPlainObject(value)) {
        o[key] = QueryHelper.processWhere(value as ObjectQuery<T>, prop?.type ?? entityName, metadata, platform, convertCustomTypes, false);
      } else if (!QueryHelper.isSupportedOperator(key)) {
        o[key] = value;
      } else if (operatorExpression) {
        const [k, expr] = key.split(':');
        o[k] = QueryHelper.processExpression(expr, value);
      } else {
        const m = key.match(/([\w-]+) ?([<>=!]+)$/)!;
        if (m) {
          o[m[1]] = QueryHelper.processExpression(m[2], value);
        } else {
          o[key] = value;
        }
      }

      return o;
    }, {} as ObjectQuery<T>);
  }

  static getActiveFilters(entityName: string, options: Dictionary<boolean | Dictionary> | string[] | boolean, filters: Dictionary<FilterDef<any>>): FilterDef<any>[] {
    if (options === false) {
      return [];
    }

    const opts: Dictionary<boolean | Dictionary> = {};

    if (Array.isArray(options)) {
      options.forEach(filter => opts[filter] = true);
    } else if (Utils.isPlainObject(options)) {
      Object.keys(options).forEach(filter => opts[filter] = options[filter]);
    }

    return Object.keys(filters)
      .filter(f => QueryHelper.isFilterActive(entityName, f, filters[f], opts))
      .map(f => {
        filters[f].name = f;
        return filters[f];
      });
  }

  static isFilterActive(entityName: string, filterName: string, filter: FilterDef<any>, options: Dictionary<boolean | Dictionary>): boolean {
    if (filter.entity && !filter.entity.includes(entityName)) {
      return false;
    }

    if (options[filterName] === false) {
      return false;
    }

    return filter.default || filterName in options;
  }

  static processCustomType<T>(prop: EntityProperty<T>, cond: FilterQuery<T>, platform: Platform, key?: string, fromQuery?: boolean): FilterQuery<T> {
    if (Utils.isPlainObject(cond)) {
      return Object.keys(cond).reduce((o, k) => {
        if (Utils.isOperator(k, true) || prop.referencedPKs?.includes(k)) {
          o[k] = QueryHelper.processCustomType(prop, cond[k], platform, k, fromQuery);
        } else {
          o[k] = cond[k];
        }

        return o;
      }, {} as ObjectQuery<T>);
    }

    if (Array.isArray(cond) && !(key && ARRAY_OPERATORS.includes(key))) {
      return (cond as ObjectQuery<T>[]).map(v => QueryHelper.processCustomType(prop, v, platform, key, fromQuery)) as unknown as ObjectQuery<T>;
    }

    return prop.customType.convertToDatabaseValue(cond, platform, fromQuery);
  }

  private static processExpression<T>(expr: string, value: T): Dictionary<T> {
    switch (expr) {
      case '>': return { $gt: value };
      case '<': return { $lt: value };
      case '>=': return { $gte: value };
      case '<=': return { $lte: value };
      case '!=': return { $ne: value };
      case '!': return { $not: value };
      default: return { ['$' + expr]: value };
    }
  }

  private static isSupportedOperator(key: string): boolean {
    return !!QueryHelper.SUPPORTED_OPERATORS.find(op => key.includes(op));
  }

  private static processJsonCondition<T>(o: ObjectQuery<T>, value: Dictionary, path: string[], platform: Platform) {
    if (Utils.isPlainObject(value) && !Object.keys(value).some(k => Utils.isOperator(k))) {
      Object.keys(value).forEach(k => {
        this.processJsonCondition(o, value[k], [...path, k], platform);
      });

      return o;
    }

    const operatorObject = Utils.isPlainObject(value) && Object.keys(value).every(k => Utils.isOperator(k));
    const type = operatorObject ? typeof Object.values(value)[0] : typeof value;
    const k = platform.getSearchJsonPropertyKey(path, type);
    o[k] = value;

    return o;
  }

}

export const expr = (sql: string) => sql;
