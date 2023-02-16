"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "IndexRoute", {
    enumerable: true,
    get: ()=>IndexRoute
});
const _express = require("express");
const _config = require("../config/index");
const _constants = require("../constants/index");
const _indexController = _interopRequireDefault(require("../controllers/health/index.controller"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let Route = class Route {
    initializeRoutes() {
        this.router.get(_constants.RoutesConstants.HEALTH, this.indexController.health);
    }
    constructor(){
        this.path = `${_config.config.BASE_URL}/`;
        this.router = (0, _express.Router)();
        this.indexController = new _indexController.default();
        this.initializeRoutes();
    }
};
const IndexRoute = new Route();

//# sourceMappingURL=index.routes.js.map