"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RoleController", {
    enumerable: true,
    get: ()=>RoleController
});
const _roleservice = require("../../services/roleservice/index");
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
let RoleController = class RoleController {
    constructor(){
        this.roleData = new _roleservice.RoleService();
        var _this = this;
        this.createRole = function() {
            var _ref = _asyncToGenerator(function*(req, res, next) {
                try {
                    const roleData = req.body;
                    const createUserRoleData = yield _this.roleData.createRole(_objectSpread({}, roleData));
                    return res.status(201).json({
                        data: createUserRoleData,
                        status: 200,
                        message: 'role created'
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
        this.getRoles = function() {
            var _ref = _asyncToGenerator(function*(_, res, next) {
                try {
                    const findAllRolesData = yield _this1.roleData.findAllRoles();
                    return res.status(200).json({
                        data: findAllRolesData,
                        status: 200,
                        message: 'get all roles'
                    });
                } catch (error) {
                    return next(error);
                }
            });
            return function(_, res, next) {
                return _ref.apply(this, arguments);
            };
        }();
        var _this2 = this;
        this.deleteRole = function() {
            var _ref = _asyncToGenerator(function*(req, res, next) {
                try {
                    const { id  } = req.params;
                    const data = yield _this2.roleData.deleteRole(id);
                    return res.status(200).json({
                        data,
                        status: 200,
                        message: 'role deleted successfully'
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
        this.getRoleById = function() {
            var _ref = _asyncToGenerator(function*(req, res, next) {
                try {
                    const roleId = req.params.id;
                    const findOneRoleData = yield _this3.roleData.findRoleById(roleId);
                    return res.status(200).json({
                        data: findOneRoleData,
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
        this.updateRole = function() {
            var _ref = _asyncToGenerator(function*(req, res, next) {
                try {
                    const { id  } = req.params;
                    const role = req.body;
                    const data = yield _this4.roleData.updateRole(id, role);
                    return res.status(200).json({
                        data,
                        status: 200,
                        message: 'Role updated successfully'
                    });
                } catch (error) {
                    return next(error);
                }
            });
            return function(req, res, next) {
                return _ref.apply(this, arguments);
            };
        }();
    }
};

//# sourceMappingURL=role.controller.js.map