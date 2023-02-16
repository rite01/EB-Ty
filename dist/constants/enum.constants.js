"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    NODE_ENV: ()=>NODE_ENV,
    UserRoles: ()=>UserRoles
});
var NODE_ENV;
(function(NODE_ENV) {
    NODE_ENV["DEVELOPMENT"] = 'development';
    NODE_ENV["PRODUCTION"] = 'production';
    NODE_ENV["TEST"] = 'test';
})(NODE_ENV || (NODE_ENV = {}));
var UserRoles;
(function(UserRoles) {
    UserRoles["ADMIN"] = 'admin';
    UserRoles["USER"] = 'user';
    UserRoles["SUPER_ADMIN"] = 'superAdmin';
})(UserRoles || (UserRoles = {}));

//# sourceMappingURL=enum.constants.js.map