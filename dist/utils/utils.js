"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    isEmpty: ()=>isEmpty,
    getOsEnv: ()=>getOsEnv,
    toNumber: ()=>toNumber,
    normalizePort: ()=>normalizePort,
    isObject: ()=>isObject,
    isFunction: ()=>isFunction,
    isString: ()=>isString,
    isNumber: ()=>isNumber
});
const isEmpty = (value)=>{
    var _Object_keys;
    if (value === null) {
        return true;
    }
    if (typeof value !== 'number' && value === '') {
        return true;
    }
    if (typeof value === 'undefined' || value === undefined) {
        return true;
    }
    if (value !== null && typeof value === 'object' && !((_Object_keys = Object.keys(value)) === null || _Object_keys === void 0 ? void 0 : _Object_keys.length)) {
        return true;
    }
    return false;
};
const getOsEnv = (key)=>{
    const { env  } = process;
    if (isEmpty(env[key])) {
        throw new Error(`[ENV] ${key} is not set.`);
    }
    return env[key];
};
const toNumber = (val)=>Number.parseInt(val, 10);
const normalizePort = (port)=>{
    const parsedPort = toNumber(port);
    if (Number.isNaN(parsedPort)) {
        return port;
    }
    if (parsedPort >= 0) {
        return parsedPort;
    }
    return false;
};
const isObject = (fn)=>!isEmpty(fn) && typeof fn === 'object';
const isFunction = (val)=>typeof val === 'function';
const isString = (val)=>typeof val === 'string';
const isNumber = (val)=>typeof val === 'number';

//# sourceMappingURL=utils.js.map