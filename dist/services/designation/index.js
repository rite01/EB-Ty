"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DesignationService", {
    enumerable: true,
    get: ()=>DesignationService
});
const _exceptions = require("../../exceptions/index");
const _utils = require("../../utils/utils");
const _models = _interopRequireDefault(require("../../databases/models/index"));
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
let DesignationService = class DesignationService {
    createDesignation(data) {
        var _this = this;
        return _asyncToGenerator(function*() {
            if ((0, _utils.isEmpty)(data)) throw new _exceptions.BadRequestException('data is empty');
            const result = yield _this.designation.findOne({
                where: {
                    name: data.name
                }
            });
            if (result) throw new _exceptions.ConflictException('This designation already exists');
            const createDesignation = yield _this.designation.create(_objectSpread({}, data));
            return createDesignation;
        })();
    }
    findAllDesignations() {
        var _this = this;
        return _asyncToGenerator(function*() {
            const designations = yield _this.designation.findAll();
            return designations;
        })();
    }
    findDesignationById(designationId) {
        var _this = this;
        return _asyncToGenerator(function*() {
            if ((0, _utils.isEmpty)(designationId)) throw new _exceptions.BadRequestException('designation ID is empty');
            const result = yield _this.designation.findOne({
                where: {
                    id: designationId
                }
            });
            if (!result) throw new _exceptions.ConflictException("designation doesn't exist");
            return result;
        })();
    }
    updateDesignation(designationId, designationData) {
        var _this = this;
        return _asyncToGenerator(function*() {
            const { name , level  } = designationData;
            if ((0, _utils.isEmpty)(designationData)) throw new _exceptions.BadRequestException('designationData is empty');
            if (name || level) {
                const result = yield _this.designation.findOne({
                    where: {
                        name,
                        level
                    }
                });
                if (result) throw new _exceptions.ConflictException('This designation already exists');
            }
            const updateDesignationById = yield _this.designation.update({
                name,
                level
            }, {
                where: {
                    id: designationId
                },
                returning: true
            });
            if (!updateDesignationById) throw new _exceptions.ConflictException("Designation doesn't exist");
            return updateDesignationById;
        })();
    }
    deleteDesignation(designationId) {
        var _this = this;
        return _asyncToGenerator(function*() {
            const result = yield _this.designation.destroy({
                where: {
                    id: designationId
                }
            });
            if (!result) throw new _exceptions.ConflictException("Designation doesn't exist");
            return result;
        })();
    }
    constructor(){
        this.designation = _models.default.models.designation;
    }
};

//# sourceMappingURL=index.js.map