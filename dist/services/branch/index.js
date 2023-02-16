"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BranchService", {
    enumerable: true,
    get: ()=>BranchService
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
let BranchService = class BranchService {
    createBranch(branchData) {
        var _this = this;
        return _asyncToGenerator(function*() {
            const { buildingNo , street , landmark  } = branchData;
            if ((0, _utils.isEmpty)(branchData)) throw new _exceptions.BadRequestException('branch is empty');
            const result = yield _this.branch.findOne({
                where: {
                    buildingNo,
                    street,
                    landmark
                }
            });
            if (result) throw new _exceptions.ConflictException('This branch already exists');
            const createBranch = yield _this.branch.create(_objectSpread({}, branchData));
            return createBranch;
        })();
    }
    findAllBranches() {
        var _this = this;
        return _asyncToGenerator(function*() {
            const branches = yield _this.branch.findAll();
            return branches;
        })();
    }
    findBranchById(branchId) {
        var _this = this;
        return _asyncToGenerator(function*() {
            if ((0, _utils.isEmpty)(branchId)) throw new _exceptions.BadRequestException('Department ID is empty');
            const result = yield _this.branch.findOne({
                where: {
                    id: branchId
                }
            });
            if (!result) throw new _exceptions.ConflictException("Department doesn't exist");
            return result;
        })();
    }
    updateBranch(branchId, branchData) {
        var _this = this;
        return _asyncToGenerator(function*() {
            const { buildingNo , street , landmark , city , state , country , zipCode  } = branchData;
            if ((0, _utils.isEmpty)(branchData)) throw new _exceptions.BadRequestException('branchData is empty');
            const updateBranchById = yield _this.branch.update({
                buildingNo,
                street,
                landmark,
                city,
                state,
                country,
                zipCode
            }, {
                where: {
                    id: branchId
                },
                returning: true
            });
            if (!updateBranchById) throw new _exceptions.ConflictException("Branch doesn't exist");
            return updateBranchById;
        })();
    }
    deleteBranch(branchId) {
        var _this = this;
        return _asyncToGenerator(function*() {
            const result = yield _this.branch.destroy({
                where: {
                    id: branchId
                }
            });
            if (!result) throw new _exceptions.ConflictException("Branch doesn't exist");
            return result;
        })();
    }
    constructor(){
        this.branch = _models.default.models.branches;
    }
};

//# sourceMappingURL=index.js.map