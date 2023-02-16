"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UserProfileController", {
    enumerable: true,
    get: ()=>UserProfileController
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
let UserProfileController = class UserProfileController {
    constructor(){
        this.profileService = new _services.UserProfileService();
        var _this = this;
        this.createUserProfiles = function() {
            var _ref = _asyncToGenerator(function*(req, res, next) {
                try {
                    const profileData = req.body;
                    const data = yield _this.profileService.createUserProfile(profileData);
                    return res.status(201).json({
                        data,
                        status: 200,
                        message: 'user profile created successfully'
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
        this.getAllProfiles = function() {
            var _ref = _asyncToGenerator(function*(req, res, next) {
                try {
                    const data = yield _this1.profileService.findAllUserProfiles();
                    return res.status(200).json({
                        data,
                        status: 200,
                        message: 'profiles fetched successfully'
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
        this.getProfileById = function() {
            var _ref = _asyncToGenerator(function*(req, res, next) {
                try {
                    const { id  } = req.params;
                    const data = yield _this2.profileService.findProfilesById(id);
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
        this.updateProfile = function() {
            var _ref = _asyncToGenerator(function*(req, res, next) {
                try {
                    const { id  } = req.params;
                    const profileData = req.body;
                    const data = yield _this3.profileService.updateUserProfile(id, profileData);
                    return res.status(200).json({
                        data,
                        status: 200,
                        message: 'profile updated successfully'
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
        this.deleteUserProfile = function() {
            var _ref = _asyncToGenerator(function*(req, res, next) {
                try {
                    const { id  } = req.params;
                    const data = yield _this4.profileService.deleteUserProfile(id);
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
    }
};

//# sourceMappingURL=userProfile.controller.js.map