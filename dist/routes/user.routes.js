"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UsersRoute", {
    enumerable: true,
    get: ()=>UsersRoute
});
const _express = require("express");
const _config = require("../config/index");
const _userDtos = require("../dtos/user.dtos");
const _validationMiddleware = require("../middlewares/validation.middleware");
const _constants = require("../constants/index");
const _usersController = _interopRequireDefault(require("../controllers/user/users.controller"));
const _multer = require("../middlewares/multer");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let Route = class Route {
    initializeRoutes() {
        try {
            this.router.post(_constants.RoutesConstants.USER.CREATE, (0, _validationMiddleware.validationMiddleware)(_userDtos.CreateUserDto, 'body'), this.usersController.createUser);
            this.router.patch(_constants.RoutesConstants.USER.UPDATE, this.usersController.updateUserDetail);
            this.router.post(_constants.RoutesConstants.USER.LOGIN, this.usersController.logIn);
            this.router.post(_constants.RoutesConstants.USER.CSV, _multer.FileUpload, this.usersController.uploadUserFile);
            this.router.get(_constants.RoutesConstants.USER.ALL_USER, this.usersController.getUsers);
            this.router.get(_constants.RoutesConstants.USER.GET_BY_ID, this.usersController.getUserById);
            this.router.delete(_constants.RoutesConstants.USER.DELETE, this.usersController.deleteUser);
        } catch (error) {
            console.log('>>>', error);
        }
    }
    constructor(){
        this.path = `${_config.config.BASE_URL}/`;
        this.router = (0, _express.Router)();
        this.usersController = new _usersController.default();
        this.initializeRoutes();
    }
};
const UsersRoute = new Route();

//# sourceMappingURL=user.routes.js.map