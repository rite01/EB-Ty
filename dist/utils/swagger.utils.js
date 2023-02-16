"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "swaggerSpecs", {
    enumerable: true,
    get: ()=>swaggerSpecs
});
const _swaggerJsdoc = _interopRequireDefault(require("swagger-jsdoc"));
const _config = require("../config/index");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const swaggerDefinition = {
    swagger: '2.0',
    info: {
        title: 'REST API',
        version: '1.0.0',
        description: 'Example docs'
    },
    host: `localhost:${_config.config.PORT}`,
    basePath: _config.config.BASE_URL,
    tags: [
        {
            name: 'Health',
            description: ''
        },
        {
            name: 'Users',
            description: 'API for users and admin'
        },
        {
            name: 'Branch',
            description: 'Api For branch crud'
        },
        {
            name: 'Designation',
            description: 'Api For Designation crud'
        },
        {
            name: 'Role',
            description: 'Api For Role crud'
        },
        {
            name: 'UserProfile',
            description: 'Api For UserProfile crud'
        }
    ],
    schemes: [
        'http',
        'https'
    ],
    securityDefinitions: {
        bearerAuth: {
            type: 'apiKey',
            name: 'Authorization',
            scheme: 'bearer',
            bearerFormat: 'JWT',
            in: 'header'
        }
    },
    consumes: [
        'application/json'
    ],
    produces: [
        'application/json'
    ]
};
const options = {
    swaggerDefinition,
    apis: [
        '**/*.ts'
    ]
};
const swaggerSpecs = (0, _swaggerJsdoc.default)(options);

//# sourceMappingURL=swagger.utils.js.map