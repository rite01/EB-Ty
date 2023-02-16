"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ResponseData", {
    enumerable: true,
    get: ()=>ResponseData
});
const ResponseData = (status, message, error, data)=>{
    if (error != null && error instanceof Error) {
        const response = {
            status,
            message: error.message,
            errors: error,
            data: null
        };
        return response;
    }
    const res = {
        status,
        message,
        errors: error,
        data
    };
    return res;
};

//# sourceMappingURL=handler.js.map