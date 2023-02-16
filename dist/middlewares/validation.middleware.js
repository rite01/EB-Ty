"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "validationMiddleware", {
    enumerable: true,
    get: ()=>validationMiddleware
});
const _classTransformer = require("class-transformer");
const _classValidator = require("class-validator");
const _exceptions = require("../exceptions/index");
const validationMiddleware = (type, value = 'body', skipMissingProperties = false, whitelist = true, forbidNonWhitelisted = true)=>(req, _, next)=>{
        (0, _classValidator.validate)((0, _classTransformer.plainToInstance)(type, req[value]), {
            skipMissingProperties,
            whitelist,
            forbidNonWhitelisted
        }).then((errors)=>{
            if (errors.length > 0) {
                const message = errors.map((error)=>Object.values(error.constraints)).join(', ');
                next(new _exceptions.BadRequestException(message));
            } else {
                next();
            }
        });
    };

//# sourceMappingURL=validation.middleware.js.map