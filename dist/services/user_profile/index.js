"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UserProfileService", {
    enumerable: true,
    get: ()=>UserProfileService
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
const { users , userProfile , branches , department , designation  } = _models.default.models;
let UserProfileService = class UserProfileService {
    createUserProfile(data) {
        return _asyncToGenerator(function*() {
            if ((0, _utils.isEmpty)(data)) throw new _exceptions.BadRequestException('data is empty');
            const result = yield userProfile.findOne({
                where: {
                    userId: data.userId
                }
            });
            if (result) throw new _exceptions.ConflictException('This user profile already exists');
            const createdUserProfile = yield userProfile.create(_objectSpread({}, data));
            return createdUserProfile;
        })();
    }
    findAllUserProfiles() {
        return _asyncToGenerator(function*() {
            const foundProfiles = yield userProfile.findAll({
                include: [
                    {
                        model: users,
                        as: 'userDetails'
                    },
                    {
                        model: branches,
                        as: 'branchDetails'
                    },
                    {
                        model: department,
                        as: 'departmentDetails'
                    },
                    {
                        model: designation,
                        as: 'designationDetails'
                    }
                ]
            });
            return foundProfiles;
        })();
    }
    findProfilesById(profileId) {
        return _asyncToGenerator(function*() {
            if ((0, _utils.isEmpty)(profileId)) throw new _exceptions.BadRequestException('profile ID is empty');
            const result = yield userProfile.findOne({
                where: {
                    id: profileId
                },
                include: [
                    {
                        model: users,
                        as: 'userDetails'
                    },
                    {
                        model: branches,
                        as: 'branchDetails'
                    },
                    {
                        model: department,
                        as: 'departmentDetails'
                    },
                    {
                        model: designation,
                        as: 'designationDetails'
                    }
                ]
            });
            if (!result) throw new _exceptions.ConflictException("profile doesn't exist");
            return result;
        })();
    }
    updateUserProfile(profileId, profileData) {
        return _asyncToGenerator(function*() {
            const { userId  } = profileData;
            if ((0, _utils.isEmpty)(profileData)) throw new _exceptions.BadRequestException('profileData is empty');
            if (userId) {
                const result = yield userProfile.findOne({
                    where: {
                        userId
                    }
                });
                if (result) throw new _exceptions.ConflictException('This designation already exists');
            }
            const updateProfileById = yield userProfile.update(_objectSpread({}, profileData), {
                where: {
                    id: profileId
                },
                returning: true
            });
            if (!updateProfileById) throw new _exceptions.ConflictException("Profile doesn't exist");
            return updateProfileById;
        })();
    }
    deleteUserProfile(profileId) {
        return _asyncToGenerator(function*() {
            const result = yield userProfile.destroy({
                where: {
                    id: profileId
                }
            });
            if (!result) throw new _exceptions.ConflictException("Profile doesn't exist");
            return result;
        })();
    }
};

//# sourceMappingURL=index.js.map