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
    JwtService: ()=>JwtService,
    jwtService: ()=>jwtService
});
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
let JwtService = class JwtService {
    constructor(){
        this.verifyToken = function() {
            var _ref = _asyncToGenerator(function*(token) {
                const decoded = yield (0, _jsonwebtoken.verify)(token, _config.config.JWT.JWT_SECRET);
                return decoded;
            });
            return function(token) {
                return _ref.apply(this, arguments);
            };
        }();
        this.decodeToken = (token)=>{
            const decodedToken = (0, _jsonwebtoken.decode)(token);
            return decodedToken;
        };
        this.signToken = (id)=>{
            const token = (0, _jsonwebtoken.sign)({
                id
            }, _config.config.JWT.JWT_SECRET, {
                expiresIn: _config.config.JWT.EXPIRES_IN,
                algorithm: 'RS256'
            });
            return token;
        };
    }
};
const jwtService = new JwtService();

//# sourceMappingURL=jwt.services.js.map