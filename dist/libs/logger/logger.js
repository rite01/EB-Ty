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
    logger: ()=>logger,
    stream: ()=>stream
});
const _fs = require("fs");
const _path = require("path");
const _winston = require("winston");
const _winstonDailyRotateFile = _interopRequireDefault(require("winston-daily-rotate-file"));
const _index = require("../../config/index");
const _loggerUtilities = require("./logger.utilities");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const logDir = (0, _path.join)(__dirname, _index.config.LOGS.DIR);
if (_index.config.isDevelopment && !(0, _fs.existsSync)(logDir)) {
    (0, _fs.mkdirSync)(logDir);
}
const logger = (0, _winston.createLogger)({
    format: _winston.format.combine(_winston.format.timestamp(), _winston.format.printf((info)=>{
        if (info.level === 'error') console.log(info.message);
        return _loggerUtilities.utilities.format.getFormattedLogs(_index.config.APP_NAME, info);
    })),
    transports: _index.config.isDevelopment ? [
        new _winstonDailyRotateFile.default({
            level: 'debug',
            datePattern: 'YYYY-MM-DD',
            dirname: `${logDir}/debug`,
            filename: '%DATE%.log',
            maxFiles: 30,
            json: false,
            zippedArchive: true
        }),
        new _winstonDailyRotateFile.default({
            level: 'error',
            datePattern: 'YYYY-MM-DD',
            dirname: `${logDir}/error`,
            filename: '%DATE%.log',
            maxFiles: 30,
            handleExceptions: true,
            json: false,
            zippedArchive: true
        })
    ] : []
});
logger.add(new _winston.transports.Console({
    format: _winston.format.combine(_winston.format.timestamp(), _winston.format.ms(), _loggerUtilities.utilities.format.consoleFormat(_index.config.APP_NAME, {
        colors: true,
        prettyPrint: true
    }))
}));
const stream = {
    write: (message)=>{
        logger.info(message.substring(0, message.lastIndexOf('\n')));
    }
};

//# sourceMappingURL=logger.js.map