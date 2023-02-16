"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BranchRoute", {
    enumerable: true,
    get: ()=>BranchRoute
});
const _express = require("express");
const _config = require("../config/index");
const _constants = require("../constants/index");
const _controllers = require("../controllers/index");
const _authMiddlewares = require("../middlewares/auth.middlewares");
let Route = class Route {
    initializeRoutes() {
        try {
            this.router.post(_constants.RoutesConstants.ADMIN.CREATE, _authMiddlewares.checkRoleMiddleware, this.branchController.createBranch);
            this.router.patch(_constants.RoutesConstants.ADMIN.UPDATE, _authMiddlewares.checkRoleMiddleware, this.branchController.updateBranch);
            this.router.get(_constants.RoutesConstants.ADMIN.ALL_DEPARTMENT, this.branchController.getAllBranches);
            this.router.get(_constants.RoutesConstants.ADMIN.GET_BY_ID, _authMiddlewares.checkRoleMiddleware, this.branchController.getBranchById);
            this.router.delete(_constants.RoutesConstants.ADMIN.DELETE, _authMiddlewares.checkRoleMiddleware, this.branchController.deleteBranch);
        } catch (error) {
            console.log('>>>', error);
        }
    }
    constructor(){
        this.path = `${_config.config.BASE_URL}/branch`;
        this.router = (0, _express.Router)();
        this.branchController = new _controllers.BranchController();
        this.initializeRoutes();
    }
};
const BranchRoute = new Route();

//# sourceMappingURL=branch.routes.js.map