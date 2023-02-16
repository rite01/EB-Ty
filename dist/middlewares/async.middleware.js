"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "asyncHandler", {
    enumerable: true,
    get: ()=>asyncHandler
});
const asyncHandler = (fn)=>(req, res, next)=>{
        fn(req, res, next).catch(next);
    };

//# sourceMappingURL=async.middleware.js.map