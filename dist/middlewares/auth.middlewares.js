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
    authMiddleware: ()=>authMiddleware,
    checkRoleMiddleware: ()=>checkRoleMiddleware
});
const _exceptions = require("../exceptions/index");
const _models = _interopRequireDefault(require("../databases/models/index"));
const _jwtServices = require("../services/jwt/jwt.services");
const _errorMessageConstants = require("../constants/error.message.constants");
const _asyncMiddleware = require("./async.middleware");
const _enumConstants = require("../constants/enum.constants");
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
const { users  } = _models.default.models;
const authMiddleware = (0, _asyncMiddleware.asyncHandler)(function() {
    var _ref = _asyncToGenerator(function*(req, _, next) {
        var _req_cookies;
        let token;
        const { authorization  } = req.headers;
        if (authorization && authorization.startsWith('Bearer')) {
            token = authorization.split(' ')[1];
        } else if ((_req_cookies = req.cookies) === null || _req_cookies === void 0 ? void 0 : _req_cookies.token) {
            token = req.cookies.token;
        }
        if (!token) {
            return next(new _exceptions.UnauthorizedException(_errorMessageConstants.ErrorMessage.NOT_LOGGED_IN));
        }
        const decoded = yield _jwtServices.jwtService.verifyToken(token);
        if (!decoded || !decoded.id) {
            return next(new _exceptions.UnauthorizedException(_errorMessageConstants.ErrorMessage.USER_WITH_TOKEN_NOT_EXIST));
        }
        const currentUser = yield users.findByPk(decoded.id);
        if (!currentUser) {
            return next(new _exceptions.UnauthorizedException(_errorMessageConstants.ErrorMessage.USER_WITH_TOKEN_NOT_EXIST));
        }
        req.user = currentUser;
        return next();
    });
    return function(req, _, next) {
        return _ref.apply(this, arguments);
    };
}());
const checkRoleMiddleware = (0, _asyncMiddleware.asyncHandler)(function() {
    var _ref = _asyncToGenerator(function*(req, _, next) {
        var _req_cookies;
        let token;
        const { authorization  } = req.headers;
        if (authorization && authorization.startsWith('Bearer')) {
            token = authorization.split(' ')[1];
        } else if ((_req_cookies = req.cookies) === null || _req_cookies === void 0 ? void 0 : _req_cookies.token) {
            token = req.cookies.token;
        }
        if (!token) {
            return next(new _exceptions.UnauthorizedException(_errorMessageConstants.ErrorMessage.NOT_LOGGED_IN));
        }
        const decoded = yield _jwtServices.jwtService.verifyToken(token);
        console.log(decoded);
        if (decoded.role !== _enumConstants.UserRoles.ADMIN) {
            return next(new _exceptions.UnauthorizedException(_errorMessageConstants.ErrorMessage.UNAUTHORIZED_ACCESS));
        }
        const currentUser = yield users.findByPk(decoded.id);
        if (!currentUser) {
            return next(new _exceptions.UnauthorizedException(_errorMessageConstants.ErrorMessage.USER_WITH_TOKEN_NOT_EXIST));
        }
        req.user = currentUser;
        return next();
    });
    return function(req, _, next) {
        return _ref.apply(this, arguments);
    };
}());

//# sourceMappingURL=auth.middlewares.js.map