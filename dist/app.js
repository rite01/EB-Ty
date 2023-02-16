"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
require("reflect-metadata");
const _express = _interopRequireDefault(require("express"));
const _path = require("path");
const _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));
const _cors = _interopRequireDefault(require("cors"));
const _middlewares = require("./middlewares/index");
const _libs = require("./libs/index");
const _constants = require("./constants/index");
const _config = require("./config/index");
const _models = _interopRequireDefault(require("./databases/models/index"));
const _routes = require("./routes/index");
const _userRoutes = require("./routes/user.routes");
const _exceptions = require("./exceptions/index");
const _swaggerUtils = require("./utils/swagger.utils");
const _roleRoutes = require("./routes/role.routes");
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
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
process.on('uncaughtException', (err)=>{
    console.log(`UNCAUGHT EXCEPTION! ${err === null || err === void 0 ? void 0 : err.name}: ${err === null || err === void 0 ? void 0 : err.message}`);
    _libs.loggerService.logger.error(`UNCAUGHT EXCEPTION! ${err === null || err === void 0 ? void 0 : err.name}: ${err === null || err === void 0 ? void 0 : err.message}`, ()=>process.exit(1));
});
let App = class App {
    bootstrap() {
        var _this = this;
        return _asyncToGenerator(function*() {
            try {
                yield _models.default.authenticate().then(()=>{
                    _libs.loggerService.info(`Database connected 🔥 on ${_this.env} mode...`, {
                        controller: App.name,
                        function: 'bootstrap'
                    });
                    _this.listen();
                });
            } catch (error) {
                _libs.loggerService.error(`Database not connected: ${error === null || error === void 0 ? void 0 : error.message}`, {
                    controller: App.name,
                    function: 'bootstrap'
                });
                process.exit(1);
            }
        })();
    }
    listen() {
        this.server = this.app.listen(this.port, ()=>{
            _libs.loggerService.info(`🚀 App listening on the port ${this.port} ENV: ${this.env} mode...`, {
                controller: App.name,
                function: 'listen'
            });
        });
    }
    getServerInstance() {
        return this.app;
    }
    initializeMiddlewares() {
        this.app.use((0, _cors.default)({
            origin: _config.config.CORS.ORIGIN,
            credentials: _config.config.CORS.CREDENTIALS
        }));
        this.app.use(_express.default.json());
        this.app.use(_express.default.urlencoded({
            extended: true
        }));
        this.app.use(_express.default.static((0, _path.join)(__dirname, 'public')));
    }
    initializeRoutes() {
        const routes = [
            _routes.IndexRoute,
            _userRoutes.UsersRoute,
            _routes.DepartmentRoute,
            _routes.BranchRoute,
            _routes.DesignationRoute,
            _roleRoutes.RoleRoute,
            _routes.UserProfileRoute
        ];
        routes === null || routes === void 0 ? void 0 : routes.forEach((route)=>this.app.use(route.path, route.router));
    }
    initializeSwagger() {
        this.app.use(_config.config.SWAGGER_URL, _swaggerUiExpress.default.serve, _swaggerUiExpress.default.setup(_swaggerUtils.swaggerSpecs));
    }
    initializeErrorHandling() {
        this.app.all(_constants.RoutesConstants.NOT_FOUND, (req)=>{
            throw new _exceptions.NotFoundException(`Can't find ${req === null || req === void 0 ? void 0 : req.originalUrl} on this server!`);
        });
        this.app.use(_middlewares.errorMiddleware);
    }
    constructor(){
        this.app = (0, _express.default)();
        this.env = _config.config.NODE_ENV;
        this.port = _config.config.PORT;
        this.initializeMiddlewares();
        this.initializeRoutes();
        this.initializeSwagger();
        this.initializeErrorHandling();
    }
};
process.on('SIGTERM', ()=>{
    var _server;
    console.log(_constants.ErrorMessage.SIGTERM);
    (_server = new App().server) === null || _server === void 0 ? void 0 : _server.close(()=>{
        _libs.loggerService.logger.error('HTTP server closed!');
    });
});
process.on('unhandledRejection', (err)=>{
    console.log(_constants.ErrorMessage.UNCAUGHT_REJECTION);
    _libs.loggerService.logger.error(`UNCAUGHT REJECTION! ${err === null || err === void 0 ? void 0 : err.name}: ${err === null || err === void 0 ? void 0 : err.message}`, ()=>process.exit(1));
});
const _default = new App();

//# sourceMappingURL=app.js.map