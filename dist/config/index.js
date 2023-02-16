"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "config", {
    enumerable: true,
    get: ()=>config
});
const _dotenv = require("dotenv");
const _utils = require("../utils/utils");
const _enumConstants = require("../constants/enum.constants");
(0, _dotenv.config)({});
const config = {
    APP_NAME: 'Node',
    NODE_ENV: (0, _utils.getOsEnv)('NODE_ENV'),
    PORT: (0, _utils.normalizePort)((0, _utils.getOsEnv)('PORT')),
    isProduction: (0, _utils.getOsEnv)('NODE_ENV') === _enumConstants.NODE_ENV.PRODUCTION,
    isDevelopment: (0, _utils.getOsEnv)('NODE_ENV') === _enumConstants.NODE_ENV.DEVELOPMENT,
    BASE_URL: '/api/v1',
    SWAGGER_URL: '/api-docs',
    DB: {
        DB_HOST: (0, _utils.getOsEnv)('DB_HOST'),
        DB_DATABASE: (0, _utils.getOsEnv)('DB_DATABASE'),
        DB_PASSWORD: (0, _utils.getOsEnv)('DB_PASSWORD'),
        DB_USER: (0, _utils.getOsEnv)('DB_USER'),
        DB_PORT: (0, _utils.getOsEnv)('DB_PORT')
    },
    JWT: {
        JWT_SECRET: (0, _utils.getOsEnv)('JWT_SECRET'),
        JWT_REFRESH_TOKEN: (0, _utils.getOsEnv)('JWT_REFRESH_TOKEN'),
        EXPIRES_IN: (0, _utils.getOsEnv)('JWT_EXPIRES_IN'),
        JWT_TOKEN: (0, _utils.getOsEnv)('JWT_TOKEN'),
        JWT_PRIVATE_KEY: (0, _utils.getOsEnv)('JWT_PRIVATE_KEY')
    },
    LOGS: {
        FORMAT: 'dev',
        DIR: '../../logs'
    },
    CORS: {
        ORIGIN: '*',
        CREDENTIALS: true
    }
};

//# sourceMappingURL=index.js.map