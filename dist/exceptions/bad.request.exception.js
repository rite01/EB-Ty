"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BadRequestException", {
    enumerable: true,
    get: ()=>BadRequestException
});
const _constants = require("../constants/index");
const _httpException = require("./http.exception");
let BadRequestException = class BadRequestException extends _httpException.HttpException {
    constructor(message){
        super(message);
        this.status = _constants.HttpStatus.BAD_REQUEST;
        this.message = message || _constants.HttpMessage.BAD_REQUEST;
        Error.captureStackTrace(this, this.constructor);
    }
};

//# sourceMappingURL=bad.request.exception.js.map