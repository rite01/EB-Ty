"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DesignationController", {
    enumerable: true,
    get: ()=>DesignationController
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
let DesignationController = class DesignationController {
    constructor(){
        this.designationService = new _services.DesignationService();
        var _this = this;
        this.createDesignation = function() {
            var _ref = _asyncToGenerator(function*(req, res, next) {
                try {
                    const designationData = req.body;
                    const data = yield _this.designationService.createDesignation(designationData);
                    return res.status(201).json({
                        data,
                        status: 200,
                        message: 'designation created successfully'
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
        this.getAllDesignation = function() {
            var _ref = _asyncToGenerator(function*(req, res, next) {
                try {
                    const data = yield _this1.designationService.findAllDesignations();
                    return res.status(200).json({
                        data,
                        status: 200,
                        message: 'designation fetched successfully'
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
        this.getDesignationById = function() {
            var _ref = _asyncToGenerator(function*(req, res, next) {
                try {
                    const { id  } = req.params;
                    const data = yield _this2.designationService.findDesignationById(id);
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
        this.updateDesignation = function() {
            var _ref = _asyncToGenerator(function*(req, res, next) {
                try {
                    const { id  } = req.params;
                    const designationData = req.body;
                    const data = yield _this3.designationService.updateDesignation(id, designationData);
                    return res.status(200).json({
                        data,
                        status: 200,
                        message: 'designation updated successfully'
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
        this.deleteDesignation = function() {
            var _ref = _asyncToGenerator(function*(req, res, next) {
                try {
                    const { id  } = req.params;
                    const data = yield _this4.designationService.deleteDesignation(id);
                    return res.status(200).json({
                        data,
                        status: 200,
                        message: 'designation deleted successfully'
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

//# sourceMappingURL=designation.controller.js.map