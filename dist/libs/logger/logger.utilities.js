"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "utilities", {
    enumerable: true,
    get: ()=>utilities
});
const _winston = require("winston");
const clc = {
    bold: (text)=>`\x1B[1m${text}\x1B[0m`,
    green: (text)=>`\x1B[32m${text}\x1B[39m`,
    yellow: (text)=>`\x1B[33m${text}\x1B[39m`,
    red: (text)=>`\x1B[31m${text}\x1B[39m`,
    magentaBright: (text)=>`\x1B[95m${text}\x1B[39m`,
    cyanBright: (text)=>`\x1B[96m${text}\x1B[39m`
};
const nestLikeColorScheme = {
    info: clc.green,
    error: clc.red,
    warn: clc.yellow,
    debug: clc.magentaBright,
    verbose: clc.cyanBright
};
function getValidValues(context = null) {
    if (!context) {
        return {
            isValidString: null,
            context: ''
        };
    }
    const isString = context === 'string';
    if (isString) {
        return {
            isValidString: true,
            context
        };
    }
    const code = (context === null || context === void 0 ? void 0 : context.status) ? `[${context === null || context === void 0 ? void 0 : context.status}] ` : '';
    const method = (context === null || context === void 0 ? void 0 : context.method) ? `[${context === null || context === void 0 ? void 0 : context.method}] ` : '';
    const _function = (context === null || context === void 0 ? void 0 : context.function) ? `[${context === null || context === void 0 ? void 0 : context.function}] ` : '';
    const controller = (context === null || context === void 0 ? void 0 : context.controller) ? `[${context === null || context === void 0 ? void 0 : context.controller}] ` : '';
    return {
        isValidString: false,
        code,
        method,
        _function,
        controller
    };
}
const getFormattedLogs = (appName = 'Node', data = null)=>{
    const values = getValidValues(data.context);
    if ((data === null || data === void 0 ? void 0 : data.context) && !values.isValidString) {
        const { code , controller , _function , method  } = values;
        return `[${appName}] [${data === null || data === void 0 ? void 0 : data.level.toUpperCase().padEnd(7).trim()}] - ${data === null || data === void 0 ? void 0 : data.timestamp} ${controller}${method}${code}${_function}${data === null || data === void 0 ? void 0 : data.message}`;
    }
    const context = (data === null || data === void 0 ? void 0 : data.context) ? `[${data === null || data === void 0 ? void 0 : data.context}]` : '';
    return `[${appName}] [${data === null || data === void 0 ? void 0 : data.level.toUpperCase().padEnd(7).trim()}] - ${data === null || data === void 0 ? void 0 : data.timestamp}${context}${data === null || data === void 0 ? void 0 : data.message}`;
};
const consoleFormat = (appName = 'Node', options = {
    colors: !process.env.NO_COLOR,
    prettyPrint: false
})=>{
    return _winston.format.printf((args)=>{
        const { context , level , message , ms  } = args;
        let { timestamp  } = args;
        if (timestamp && timestamp === new Date(timestamp).toISOString()) {
            timestamp = new Date(timestamp).toLocaleString();
        }
        const color = options.colors && nestLikeColorScheme[level] || ((text)=>text);
        const yellow = options.colors ? clc.yellow : (text)=>text;
        const _appName = `${color(`[${appName}]`)} `;
        const getContext = ()=>{
            const truthyValues = getValidValues(context);
            if ((truthyValues === null || truthyValues === void 0 ? void 0 : truthyValues.isValidString) === null) {
                return '';
            }
            if (!(truthyValues === null || truthyValues === void 0 ? void 0 : truthyValues.isValidString)) {
                const { code , method , controller , _function  } = truthyValues;
                return `${clc.yellow(controller)}${clc.green(code)}${clc.green(method)}${clc.green(_function)} `;
            }
            return `${clc.yellow(truthyValues === null || truthyValues === void 0 ? void 0 : truthyValues.context)} `;
        };
        const _ms = ms ? ` ${yellow(ms)}` : '';
        const _timestamp = timestamp ? `${timestamp} ` : '';
        const _level = `${yellow((level === null || level === void 0 ? void 0 : level.charAt(0).toUpperCase()) + (level === null || level === void 0 ? void 0 : level.slice(1)))}\t`;
        return `${_appName + _level.trimEnd()} ${clc.green('-')} ${_timestamp}${getContext()}${color(message)} - ${_ms}`;
    });
};
const utilities = {
    format: {
        consoleFormat,
        getFormattedLogs
    }
};

//# sourceMappingURL=logger.utilities.js.map