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
    BcryptService: ()=>BcryptService,
    bcryptService: ()=>bcryptService
});
const _bcrypt = require("bcrypt");
const _jsonwebtoken = require("jsonwebtoken");
const _config = require("../../config/index");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
let BcryptService = class BcryptService {
    hashPassword(password) {
        return _asyncToGenerator(function*() {
            const salt = yield (0, _bcrypt.genSalt)(10);
            const hashedPassword = yield (0, _bcrypt.hash)(password, salt);
            return hashedPassword;
        })();
    }
    comparePassword(enteredPassword, originalPassword) {
        return _asyncToGenerator(function*() {
            const isMatch = yield (0, _bcrypt.compare)(enteredPassword, originalPassword);
            return isMatch;
        })();
    }
    createToken(user) {
        var _user_role;
        const dataStoredInToken = {
            id: user.id,
            role: user === null || user === void 0 ? void 0 : (_user_role = user.role) === null || _user_role === void 0 ? void 0 : _user_role.name
        };
        const secretKey = _config.config.JWT.JWT_SECRET;
        const expiresIn = 60 * 60;
        return {
            expiresIn,
            token: (0, _jsonwebtoken.sign)(dataStoredInToken, secretKey, {
                expiresIn
            })
        };
    }
};
const bcryptService = new BcryptService();

//# sourceMappingURL=index.js.map