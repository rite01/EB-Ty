"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "NotFoundException", {
    enumerable: true,
    get: ()=>NotFoundException
});
const _constants = require("../constants/index");
const _httpException = require("./http.exception");
let NotFoundException = class NotFoundException extends _httpException.HttpException {
    constructor(message){
        super(message);
        this.status = _constants.HttpStatus.NOT_FOUND;
        this.message = message || _constants.HttpMessage.NOT_FOUND;
        Error.captureStackTrace(this, this.constructor);
    }
};

//# sourceMappingURL=not-found.exception.js.map