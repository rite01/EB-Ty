"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DepartmentRoute", {
    enumerable: true,
    get: ()=>DepartmentRoute
});
const _express = require("express");
const _config = require("../config/index");
const _constants = require("../constants/index");
const _controllers = require("../controllers/index");
const _authMiddlewares = require("../middlewares/auth.middlewares");
let Route = class Route {
    initializeRoutes() {
        try {
            this.router.post(_constants.RoutesConstants.ADMIN.CREATE, _authMiddlewares.checkRoleMiddleware, this.departmentController.createDepartment);
            this.router.patch(_constants.RoutesConstants.ADMIN.UPDATE, _authMiddlewares.checkRoleMiddleware, this.departmentController.updateDepartment);
            this.router.get(_constants.RoutesConstants.ADMIN.ALL_DEPARTMENT, this.departmentController.getAllDepartments);
            this.router.get(_constants.RoutesConstants.ADMIN.GET_BY_ID, _authMiddlewares.checkRoleMiddleware, this.departmentController.getDepartmentById);
            this.router.delete(_constants.RoutesConstants.ADMIN.DELETE, _authMiddlewares.checkRoleMiddleware, this.departmentController.deleteDepartment);
        } catch (error) {
            console.log('>>>', error);
        }
    }
    constructor(){
        this.path = `${_config.config.BASE_URL}/department`;
        this.router = (0, _express.Router)();
        this.departmentController = new _controllers.DepartmentController();
        this.initializeRoutes();
    }
};
const DepartmentRoute = new Route();

//# sourceMappingURL=deapartment.routes.js.map