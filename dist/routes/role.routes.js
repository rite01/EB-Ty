"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RoleRoute", {
    enumerable: true,
    get: ()=>RoleRoute
});
const _express = require("express");
const _config = require("../config/index");
const _constants = require("../constants/index");
const _roleController = require("../controllers/role/role.controller");
let Route = class Route {
    initializeRoutes() {
        try {
            this.router.get(_constants.RoutesConstants.ROLE.GET_ROLE, this.roleController.getRoles);
            this.router.post(_constants.RoutesConstants.ROLE.CREATE, this.roleController.createRole);
            this.router.patch(_constants.RoutesConstants.ROLE.UPDATE, this.roleController.updateRole);
            this.router.get(_constants.RoutesConstants.ROLE.GET_BY_ID, this.roleController.getRoleById);
            this.router.delete(_constants.RoutesConstants.ROLE.DELETE, this.roleController.deleteRole);
        } catch (error) {
            console.log('>>>', error);
        }
    }
    constructor(){
        this.path = `${_config.config.BASE_URL}/role`;
        this.router = (0, _express.Router)();
        this.roleController = new _roleController.RoleController();
        this.initializeRoutes();
    }
};
const RoleRoute = new Route();

//# sourceMappingURL=role.routes.js.map