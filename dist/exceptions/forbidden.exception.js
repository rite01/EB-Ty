"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ForbiddenException", {
    enumerable: true,
    get: ()=>ForbiddenException
});
const _constants = require("../constants/index");
const _httpException = require("./http.exception");
let ForbiddenException = class ForbiddenException extends _httpException.HttpException {
    constructor(message){
        super(message);
        this.status = _constants.HttpStatus.FORBIDDEN;
        this.message = message || _constants.HttpMessage.FORBIDDEN;
        Error.captureStackTrace(this, this.constructor);
    }
};

//# sourceMappingURL=forbidden.exception.js.map