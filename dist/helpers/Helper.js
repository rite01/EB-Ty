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
    GenerateToken: ()=>GenerateToken,
    GenerateRefreshToken: ()=>GenerateRefreshToken,
    PasswordHashing: ()=>PasswordHashing,
    PasswordCompare: ()=>PasswordCompare,
    ExtractToken: ()=>ExtractToken
});
const _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
const _dotenv = _interopRequireDefault(require("dotenv"));
const _bcrypt = _interopRequireDefault(require("bcrypt"));
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
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
_dotenv.default.config();
const GenerateToken = (data)=>{
    const token = _jsonwebtoken.default.sign(data, process.env.JWT_TOKEN);
    return token;
};
const GenerateRefreshToken = (data)=>{
    const token = _jsonwebtoken.default.sign(data, process.env.JWT_REFRESH_TOKEN, {
        expiresIn: '1d'
    });
    return token;
};
const PasswordHashing = function() {
    var _ref = _asyncToGenerator(function*(password) {
        const result = yield _bcrypt.default.hash(password, 10);
        return result;
    });
    return function PasswordHashing(password) {
        return _ref.apply(this, arguments);
    };
}();
const PasswordCompare = function() {
    var _ref = _asyncToGenerator(function*(password, passwordHash) {
        const matched = yield _bcrypt.default.compare(password, passwordHash);
        return matched;
    });
    return function PasswordCompare(password, passwordHash) {
        return _ref.apply(this, arguments);
    };
}();
const ExtractToken = (token)=>{
    const secretKey = process.env.JWT_TOKEN;
    let resData;
    const res = _jsonwebtoken.default.verify(token, secretKey, (err, decoded)=>{
        if (err) {
            resData = null;
        } else {
            resData = decoded;
        }
        return res;
    });
    if (resData) {
        const result = resData;
        return result;
    }
    return null;
};

//# sourceMappingURL=Helper.js.map