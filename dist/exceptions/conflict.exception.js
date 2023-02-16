"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ConflictException", {
    enumerable: true,
    get: ()=>ConflictException
});
const _constants = require("../constants/index");
const _httpException = require("./http.exception");
let ConflictException = class ConflictException extends _httpException.HttpException {
    constructor(message){
        super(message);
        this.status = _constants.HttpStatus.CONFLICT;
        this.message = message || _constants.HttpMessage.CONFLICT;
        Error.captureStackTrace(this, this.constructor);
    }
};

//# sourceMappingURL=conflict.exception.js.map