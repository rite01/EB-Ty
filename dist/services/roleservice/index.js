"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RoleService", {
    enumerable: true,
    get: ()=>RoleService
});
const _models = _interopRequireDefault(require("../../databases/models/index"));
const _exceptions = require("../../exceptions/index");
const _utils = require("../../utils/utils");
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
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
const { roles  } = _models.default.models;
let RoleService = class RoleService {
    findAllRoles() {
        return _asyncToGenerator(function*() {
            const role = yield roles.findAll();
            return role;
        })();
    }
    createRole(userData) {
        return _asyncToGenerator(function*() {
            if ((0, _utils.isEmpty)(userData)) throw new _exceptions.BadRequestException('userData is empty');
            const findRole = yield roles.findOne({
                where: {
                    name: userData.name
                }
            });
            if (findRole) throw new _exceptions.ConflictException(`This role ${userData.name} already exists`);
            const createRoleData = yield roles.create(_objectSpread({}, userData));
            return createRoleData;
        })();
    }
    deleteRole(roleId) {
        return _asyncToGenerator(function*() {
            const deleteRoleById = yield roles.destroy({
                where: {
                    id: roleId
                }
            });
            if (!deleteRoleById) throw new _exceptions.ConflictException("User doesn't exist");
            return deleteRoleById;
        })();
    }
    updateRole(roleId, roleData) {
        return _asyncToGenerator(function*() {
            const { id  } = roleData;
            if ((0, _utils.isEmpty)(roleData)) throw new _exceptions.BadRequestException('Role is empty');
            if (id) {
                const result = yield roles.findOne({
                    where: {
                        id
                    }
                });
                if (result) throw new _exceptions.ConflictException('This Role already exists');
            }
            const updateRoleById = yield roles.update(_objectSpread({}, roleData), {
                where: {
                    id: roleId
                },
                returning: true
            });
            if (!updateRoleById) throw new _exceptions.ConflictException("Role doesn't exist");
            return updateRoleById;
        })();
    }
    findRoleById(roleId) {
        return _asyncToGenerator(function*() {
            if ((0, _utils.isEmpty)(roleId)) throw new _exceptions.BadRequestException('UserId is empty');
            const findRole = yield roles.findOne({
                where: {
                    id: roleId
                },
                include: {
                    model: roles
                }
            });
            if (!findRole) throw new _exceptions.ConflictException("User doesn't exist");
            return findRole;
        })();
    }
};

//# sourceMappingURL=index.js.map