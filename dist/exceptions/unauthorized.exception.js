"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UnauthorizedException", {
    enumerable: true,
    get: ()=>UnauthorizedException
});
const _constants = require("../constants/index");
const _httpException = require("./http.exception");
let UnauthorizedException = class UnauthorizedException extends _httpException.HttpException {
    constructor(message){
        super(message);
        this.status = _constants.HttpStatus.UNAUTHORIZED;
        this.message = message || _constants.HttpMessage.UNAUTHORIZED;
        Error.captureStackTrace(this, this.constructor);
    }
};

//# sourceMappingURL=unauthorized.exception.js.map