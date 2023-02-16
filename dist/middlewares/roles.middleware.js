"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "restrictTo", {
    enumerable: true,
    get: ()=>restrictTo
});
const _exceptions = require("../exceptions/index");
const _constants = require("../constants/index");
const restrictTo = (...roles)=>(req, _, next)=>{
        const { role  } = req.body;
        if (!roles.includes(role)) {
            throw new _exceptions.ForbiddenException(_constants.ErrorMessage.PERMISSION_DENIED);
        }
        return next();
    };

//# sourceMappingURL=roles.middleware.js.map