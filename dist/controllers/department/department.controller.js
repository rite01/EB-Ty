"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DepartmentController", {
    enumerable: true,
    get: ()=>DepartmentController
});
const _department = require("../../services/department/index");
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
let DepartmentController = class DepartmentController {
    constructor(){
        this.departmentService = new _department.DepartmentService();
        var _this = this;
        this.createDepartment = function() {
            var _ref = _asyncToGenerator(function*(req, res, next) {
                try {
                    const departmentData = req.body;
                    const createDepartmentData = yield _this.departmentService.createDepartment(departmentData);
                    return res.status(201).json({
                        data: createDepartmentData,
                        status: 200,
                        message: 'department created successfully'
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
        this.getAllDepartments = function() {
            var _ref = _asyncToGenerator(function*(req, res, next) {
                try {
                    const findAllUsersData = yield _this1.departmentService.findAllDepartment();
                    return res.status(200).json({
                        data: findAllUsersData,
                        status: 200,
                        message: 'departments fetched successfully'
                    });
                } catch (error) {
                    return next(error);
                }
            });
            return function(req, res, next) {
                return _ref.apply(this, arguments);
            };
        }();
        var _this2 = this;
        this.getDepartmentById = function() {
            var _ref = _asyncToGenerator(function*(req, res, next) {
                try {
                    const departmentId = req.params.id;
                    const findOneUserData = yield _this2.departmentService.findDepartmentById(departmentId);
                    return res.status(200).json({
                        data: findOneUserData,
                        status: 200,
                        message: 'success'
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
        this.updateDepartment = function() {
            var _ref = _asyncToGenerator(function*(req, res, next) {
                try {
                    const departmentId = req.params.id;
                    const departmentData = req.body;
                    const updateDepartmentData = yield _this3.departmentService.updateDepartment(departmentId, departmentData);
                    return res.status(200).json({
                        data: updateDepartmentData,
                        status: 200,
                        message: 'department updated successfully'
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
        this.deleteDepartment = function() {
            var _ref = _asyncToGenerator(function*(req, res, next) {
                try {
                    const departmentId = req.params.id;
                    const deleteDepartmentData = yield _this4.departmentService.deleteDepartment(departmentId);
                    return res.status(200).json({
                        data: deleteDepartmentData,
                        status: 200,
                        message: 'department deleted successfully'
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

//# sourceMappingURL=department.controller.js.map