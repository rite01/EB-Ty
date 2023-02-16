"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DepartmentService", {
    enumerable: true,
    get: ()=>DepartmentService
});
const _exceptions = require("../../exceptions/index");
const _models = _interopRequireDefault(require("../../databases/models/index"));
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
const { department  } = _models.default.models;
let DepartmentService = class DepartmentService {
    createDepartment(departmentData) {
        return _asyncToGenerator(function*() {
            if ((0, _utils.isEmpty)(departmentData)) throw new _exceptions.BadRequestException('department is empty');
            const findDepartment = yield department.findOne({
                where: {
                    name: departmentData.name
                }
            });
            if (findDepartment) throw new _exceptions.ConflictException('This department already exists');
            const createDepartment = yield department.create(_objectSpread({}, departmentData));
            return createDepartment;
        })();
    }
    findAllDepartment() {
        return _asyncToGenerator(function*() {
            const departments = yield department.findAll();
            return departments;
        })();
    }
    findDepartmentById(departmentId) {
        return _asyncToGenerator(function*() {
            if ((0, _utils.isEmpty)(departmentId)) throw new _exceptions.BadRequestException('Department ID is empty');
            const findDepartment = yield department.findOne({
                where: {
                    id: departmentId
                }
            });
            if (!findDepartment) throw new _exceptions.ConflictException("Department doesn't exist");
            return findDepartment;
        })();
    }
    updateDepartment(departmentId, departmentData) {
        return _asyncToGenerator(function*() {
            if ((0, _utils.isEmpty)(departmentData)) throw new _exceptions.BadRequestException('departmentData is empty');
            if (departmentData.name) {
                const findDepartment = yield department.findOne({
                    where: {
                        name: departmentData.name
                    }
                });
                if (findDepartment) throw new _exceptions.ConflictException('This department already exists');
            }
            const updateDepartmentById = yield department.update({
                name: departmentData.name
            }, {
                where: {
                    id: departmentId
                },
                returning: true
            });
            if (!updateDepartmentById) throw new _exceptions.ConflictException("Department doesn't exist");
            return updateDepartmentById;
        })();
    }
    deleteDepartment(departmentId) {
        return _asyncToGenerator(function*() {
            const result = yield department.destroy({
                where: {
                    id: departmentId
                }
            });
            if (!result) throw new _exceptions.ConflictException("Department doesn't exist");
            return result;
        })();
    }
};

//# sourceMappingURL=index.js.map