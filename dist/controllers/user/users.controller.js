"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _user = require("../../services/user/index");
const _fsUtils = require("../../utils/fs.utils");
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
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
let UsersController = class UsersController {
    constructor(){
        this.userService = new _user.UserService();
        var _this = this;
        this.createUser = function() {
            var _ref = _asyncToGenerator(function*(req, res, next) {
                try {
                    const userData = req.body;
                    const createUserData = yield _this.userService.createUser(_objectSpread({}, userData));
                    return res.status(201).json({
                        data: createUserData,
                        status: 200,
                        message: 'created'
                    });
                } catch (error) {
                    return next(error);
                }
            });
            return function(req, res, next) {
                return _ref.apply(this, arguments);
            };
        }();
        var _this1 = this;
        this.logIn = function() {
            var _ref = _asyncToGenerator(function*(req, res, next) {
                try {
                    const userData = req.body;
                    const responseData = yield _this1.userService.login(userData);
                    return res.status(200).json(_objectSpreadProps(_objectSpread({}, responseData), {
                        status: 200,
                        message: 'login successfully'
                    }));
                } catch (error) {
                    return next(error);
                }
            });
            return function(req, res, next) {
                return _ref.apply(this, arguments);
            };
        }();
        var _this2 = this;
        this.getUsers = function() {
            var _ref = _asyncToGenerator(function*(req, res, next) {
                try {
                    const findAllUsersData = yield _this2.userService.findAllUser();
                    return res.status(200).json({
                        data: findAllUsersData,
                        status: 200,
                        message: 'findAll'
                    });
                } catch (error) {
                    return next(error);
                }
            });
            return function(req, res, next) {
                return _ref.apply(this, arguments);
            };
        }();
        var _this3 = this;
        this.getUserById = function() {
            var _ref = _asyncToGenerator(function*(req, res, next) {
                try {
                    const userId = req.params.id;
                    const findOneUserData = yield _this3.userService.findUserById(userId);
                    return res.status(200).json({
                        data: findOneUserData,
                        status: 200,
                        message: 'findOne'
                    });
                } catch (error) {
                    return next(error);
                }
            });
            return function(req, res, next) {
                return _ref.apply(this, arguments);
            };
        }();
        var _this4 = this;
        this.deleteUser = function() {
            var _ref = _asyncToGenerator(function*(req, res, next) {
                try {
                    const { id  } = req.params;
                    const data = yield _this4.userService.deleteUser(id);
                    return res.status(200).json({
                        data,
                        status: 200,
                        message: 'user deleted successfully'
                    });
                } catch (error) {
                    return next(error);
                }
            });
            return function(req, res, next) {
                return _ref.apply(this, arguments);
            };
        }();
        var _this5 = this;
        this.updateUserDetail = function() {
            var _ref = _asyncToGenerator(function*(req, res, next) {
                try {
                    const { id  } = req.params;
                    const userData = req.body;
                    const data = yield _this5.userService.updateUserDetail(id, userData);
                    return res.status(200).json({
                        data,
                        status: 200,
                        message: 'User updated successfully'
                    });
                } catch (error) {
                    return next(error);
                }
            });
            return function(req, res, next) {
                return _ref.apply(this, arguments);
            };
        }();
        var _this6 = this;
        this.uploadUserFile = function() {
            var _ref = _asyncToGenerator(function*(req, res, next) {
                try {
                    if (!req.file) {
                        return res.status(400).send('Please upload a CSV file!');
                    }
                    const data = yield (0, _fsUtils.readBuffer)(req.file.buffer);
                    yield _this6.userService.uploadFile(data);
                    return res.status(200).json({
                        status: 200,
                        message: 'data insert successfully'
                    });
                } catch (error) {
                    console.log(error);
                    return next(error);
                }
            });
            return function(req, res, next) {
                return _ref.apply(this, arguments);
            };
        }();
    }
};
const _default = UsersController;

//# sourceMappingURL=users.controller.js.map