"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DesignationRoute", {
    enumerable: true,
    get: ()=>DesignationRoute
});
const _express = require("express");
const _config = require("../config/index");
const _constants = require("../constants/index");
const _designation = require("../controllers/designation/index");
const _authMiddlewares = require("../middlewares/auth.middlewares");
let Route = class Route {
    initializeRoutes() {
        try {
            this.router.post(_constants.RoutesConstants.ADMIN.CREATE, _authMiddlewares.checkRoleMiddleware, this.designationController.createDesignation);
            this.router.patch(_constants.RoutesConstants.ADMIN.UPDATE, _authMiddlewares.checkRoleMiddleware, this.designationController.updateDesignation);
            this.router.get(_constants.RoutesConstants.ADMIN.ALL_DEPARTMENT, _authMiddlewares.checkRoleMiddleware, this.designationController.getAllDesignation);
            this.router.get(_constants.RoutesConstants.ADMIN.GET_BY_ID, _authMiddlewares.checkRoleMiddleware, this.designationController.getDesignationById);
            this.router.delete(_constants.RoutesConstants.ADMIN.DELETE, _authMiddlewares.checkRoleMiddleware, this.designationController.deleteDesignation);
        } catch (error) {
            console.log('>>>', error);
        }
    }
    constructor(){
        this.path = `${_config.config.BASE_URL}/designation`;
        this.router = (0, _express.Router)();
        this.designationController = new _designation.DesignationController();
        this.initializeRoutes();
    }
};
const DesignationRoute = new Route();

//# sourceMappingURL=designation.routes.js.map