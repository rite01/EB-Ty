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
    LoggerService: ()=>LoggerService,
    loggerService: ()=>loggerService
});
const _logger = require("./logger");
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
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
let LoggerService = class LoggerService {
    get logger() {
        return this._logger;
    }
    setContext(context) {
        this.context = context;
    }
    info(message, context) {
        context = context || this.context;
        if (typeof message === 'object') {
            const { message: msg  } = message, meta = _objectWithoutProperties(message, [
                "message"
            ]);
            return this._logger.info(msg, _objectSpread({
                context
            }, meta));
        }
        return this._logger.info(message, {
            context
        });
    }
    error(message, context, trace) {
        context = context || this.context;
        if (message instanceof Error) {
            const { message: msg  } = message, meta = _objectWithoutProperties(message, [
                "message"
            ]);
            return this._logger.error(msg, _objectSpread({
                context,
                stack: [
                    trace || message.stack
                ]
            }, meta));
        }
        if (typeof message === 'object') {
            const { message: msg1  } = message, meta1 = _objectWithoutProperties(message, [
                "message"
            ]);
            return this._logger.error(msg1, _objectSpread({
                context,
                stack: [
                    trace
                ]
            }, meta1));
        }
        return this._logger.error(message, {
            context,
            stack: [
                trace
            ]
        });
    }
    warn(message, context) {
        context = context || this.context;
        if (typeof message === 'object') {
            const { message: msg  } = message, meta = _objectWithoutProperties(message, [
                "message"
            ]);
            return this._logger.warn(msg, _objectSpread({
                context
            }, meta));
        }
        return this._logger.warn(message, {
            context
        });
    }
    debug(message, context) {
        context = context || this.context;
        if (typeof message === 'object') {
            const { message: msg  } = message, meta = _objectWithoutProperties(message, [
                "message"
            ]);
            return this._logger.debug(msg, _objectSpread({
                context
            }, meta));
        }
        return this._logger.debug(message, {
            context
        });
    }
    verbose(message, context) {
        context = context || this.context;
        if (typeof message === 'object') {
            const { message: msg  } = message, meta = _objectWithoutProperties(message, [
                "message"
            ]);
            return this._logger.verbose(msg, _objectSpread({
                context
            }, meta));
        }
        return this._logger.verbose(message, {
            context
        });
    }
    constructor(){
        this._logger = _logger.logger;
    }
};
const loggerService = new LoggerService();

//# sourceMappingURL=logger.services.js.map