/**
 * @method isEmpty
 * @param {String | Number | Object} value
 * @returns {Boolean} true & false
 * @description this value is Empty Check
 */
export const isEmpty = (value: string | number | object | undefined): boolean => {
  if (value === null) {
    return true;
  } if (typeof value !== 'number' && value === '') {
    return true;
  } if (typeof value === 'undefined' || value === undefined) {
    return true;
  } if (value !== null && typeof value === 'object' && !Object.keys(value)?.length) {
    return true;
  }
  return false;
};

/**
 * @method getOsEnv
 * @param {String} value
 * @returns {String} true & false
 * @description this value is getOsEnv Check
 */
export const getOsEnv = (key: string): any => {
  const { env } = process;
  if (isEmpty(env[key])) {
    throw new Error(`[ENV] ${key} is not set.`);
  }
  return env[key];
};

/**
 * @method toNumber
 * @param {String} value
 * @returns {Number} true & false
 * @description this value is toNumber Check
 */
export const toNumber = (val: string): number => Number.parseInt(val, 10);

/**
 * @method normalizePort
 * @param {String | Number} value
 * @returns {Number | Boolean} true & false
 * @description this value is normalizePort Check
 */
export const normalizePort = (port: any): number | boolean => {
  const parsedPort = toNumber(port);
  if (Number.isNaN(parsedPort)) {
    return port;
  }
  if (parsedPort >= 0) {
    return parsedPort;
  }
  return false;
};

/**
 * @method isObject
 * @param {String} value
 * @returns {Boolean} true & false
 * @description this value is isObject Check
 */
export const isObject = (fn: string): boolean => !isEmpty(fn) && typeof fn === 'object';

/**
  * @method isFunction
  * @param {String} value
  * @returns {Boolean} true & false
  * @description this value is isFunction Check
  */
export const isFunction = (val: string): boolean => typeof val === 'function';

/**
  * @method isString
  * @param {String} value
  * @returns {Boolean} true & false
  * @description this value is isString Check
  */
export const isString = (val: string): boolean => typeof val === 'string';

/**
  * @method isNumber
  * @param {String} value
  * @returns {Boolean} true & false
  * @description this value is isNumber Check
  */
export const isNumber = (val: string): boolean => typeof val === 'number';
