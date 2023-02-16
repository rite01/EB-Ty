"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "errorMiddleware", {
    enumerable: true,
    get: ()=>errorMiddleware
});
const _libs = require("../libs/index");
const _config = require("../config/index");
const _constants = require("../constants/index");
const _exceptions = require("../exceptions/index");
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
const handleCastErrorDB = (err)=>{
    const message = `Invalid ${err === null || err === void 0 ? void 0 : err.path}: ${err === null || err === void 0 ? void 0 : err.value}.`;
    return new _exceptions.BadRequestException(message);
};
const handleDuplicateFieldsDB = (err)=>{
    var _err_message;
    const value = err === null || err === void 0 ? void 0 : (_err_message = err.message) === null || _err_message === void 0 ? void 0 : _err_message.match(/(["'])(\\?.)*?\1/)[0];
    const message = `Duplicate field value: ${value}. Please use another value!`;
    return new _exceptions.BadRequestException(message);
};
const handleValidationErrorDB = (err)=>{
    var _Object_values;
    const errors = (_Object_values = Object.values(err === null || err === void 0 ? void 0 : err.errors)) === null || _Object_values === void 0 ? void 0 : _Object_values.map((el)=>{
        return el === null || el === void 0 ? void 0 : el.message;
    });
    const message = `Invalid input data. ${errors.join('. ')}`;
    return new _exceptions.BadRequestException(message);
};
const logError = (err, req, res)=>{
    const message = (err === null || err === void 0 ? void 0 : err.message) || (res === null || res === void 0 ? void 0 : res.statusMessage) || _constants.ErrorMessage.SOMETHING_WENT_WRONG;
    _libs.logger.error(`${err === null || err === void 0 ? void 0 : err.status} - ${req.originalUrl} [${req.method}] - ${message} `);
};
const handleJWTError = (err)=>{
    const error = _objectSpreadProps(_objectSpread({}, err), {
        message: _constants.ErrorMessage.INVALID_TOKEN
    });
    return new _exceptions.UnauthorizedException(error.message);
};
const handleJWTExpiredError = (err)=>{
    const error = _objectSpreadProps(_objectSpread({}, err), {
        message: _constants.ErrorMessage.TOKEN_EXPIRED
    });
    return new _exceptions.UnauthorizedException(error.message);
};
const sendError = (err, req, res)=>{
    if (_config.config.isDevelopment) {
        console.error('Error 💥', {
            status: err.status,
            method: req.method,
            path: req.path,
            timestamp: new Date(),
            message: err.message
        });
    }
    logError(err, req, res);
    return res.status(err.status).json({
        status: err.status,
        message: err.message
    });
};
const errorMiddleware = (err, req, res, next)=>{
    try {
        let error = _objectSpread({}, err);
        error.status = (err === null || err === void 0 ? void 0 : err.status) || _constants.HttpStatus.INTERNAL_SERVER_ERROR;
        error.message = (err === null || err === void 0 ? void 0 : err.message) || _constants.HttpMessage.INTERNAL_SERVER_ERROR;
        if ((error === null || error === void 0 ? void 0 : error.name) === 'CastError') error = handleCastErrorDB(error);
        if ((error === null || error === void 0 ? void 0 : error.code) === 11000) error = handleDuplicateFieldsDB(error);
        if ((error === null || error === void 0 ? void 0 : error.name) === 'ValidationError') error = handleValidationErrorDB(error);
        if ((error === null || error === void 0 ? void 0 : error.name) === 'JsonWebTokenError') error = handleJWTError(err);
        if ((error === null || error === void 0 ? void 0 : error.name) === 'TokenExpiredError') error = handleJWTExpiredError(err);
        sendError(error, req, res);
    } catch (error1) {
        console.log(error1);
        next(error1);
    }
};

//# sourceMappingURL=error.middleware.js.map