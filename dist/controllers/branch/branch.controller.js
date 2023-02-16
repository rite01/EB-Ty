"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BranchController", {
    enumerable: true,
    get: ()=>BranchController
});
const _services = require("../../services/index");
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
let BranchController = class BranchController {
    constructor(){
        this.branchService = new _services.BranchService();
        var _this = this;
        this.createBranch = function() {
            var _ref = _asyncToGenerator(function*(req, res, next) {
                try {
                    const departmentData = req.body;
                    const data = yield _this.branchService.createBranch(departmentData);
                    return res.status(201).json({
                        data,
                        status: 200,
                        message: 'branch created successfully'
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
        this.getAllBranches = function() {
            var _ref = _asyncToGenerator(function*(req, res, next) {
                try {
                    const data = yield _this1.branchService.findAllBranches();
                    return res.status(200).json({
                        data,
                        status: 200,
                        message: 'branches fetched successfully'
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
        this.getBranchById = function() {
            var _ref = _asyncToGenerator(function*(req, res, next) {
                try {
                    const { id  } = req.params;
                    const data = yield _this2.branchService.findBranchById(id);
                    return res.status(200).json({
                        data,
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
        this.updateBranch = function() {
            var _ref = _asyncToGenerator(function*(req, res, next) {
                try {
                    const { id  } = req.params;
                    const branchData = req.body;
                    const data = yield _this3.branchService.updateBranch(id, branchData);
                    return res.status(200).json({
                        data,
                        status: 200,
                        message: 'branch updated successfully'
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
        this.deleteBranch = function() {
            var _ref = _asyncToGenerator(function*(req, res, next) {
                try {
                    const { id  } = req.params;
                    const data = yield _this4.branchService.deleteBranch(id);
                    return res.status(200).json({
                        data,
                        status: 200,
                        message: 'branch deleted successfully'
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

//# sourceMappingURL=branch.controller.js.map