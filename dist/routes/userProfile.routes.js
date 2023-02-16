"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UserProfileRoute", {
    enumerable: true,
    get: ()=>UserProfileRoute
});
const _express = require("express");
const _config = require("../config/index");
const _constants = require("../constants/index");
const _userProfile = require("../controllers/userProfile/index");
let Route = class Route {
    initializeRoutes() {
        try {
            this.router.post(_constants.RoutesConstants.ADMIN.CREATE, this.profileController.createUserProfiles);
            this.router.patch(_constants.RoutesConstants.ADMIN.UPDATE, this.profileController.updateProfile);
            this.router.get(_constants.RoutesConstants.ADMIN.ALL_DEPARTMENT, this.profileController.getAllProfiles);
            this.router.get(_constants.RoutesConstants.ADMIN.GET_BY_ID, this.profileController.getProfileById);
            this.router.delete(_constants.RoutesConstants.ADMIN.DELETE, this.profileController.deleteUserProfile);
        } catch (error) {
            console.log('>>>', error);
        }
    }
    constructor(){
        this.path = `${_config.config.BASE_URL}/profile`;
        this.router = (0, _express.Router)();
        this.profileController = new _userProfile.UserProfileController();
        this.initializeRoutes();
    }
};
const UserProfileRoute = new Route();

//# sourceMappingURL=userProfile.routes.js.map