"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "HttpException", {
    enumerable: true,
    get: ()=>HttpException
});
const _constants = require("../constants/index");
let HttpException = class HttpException extends Error {
    constructor(message, status){
        super(message);
        this.message = message || _constants.HttpMessage.INTERNAL_SERVER_ERROR;
        this.status = status || _constants.HttpStatus.INTERNAL_SERVER_ERROR;
        Error.captureStackTrace(this, this.constructor);
    }
};

//# sourceMappingURL=http.exception.js.map