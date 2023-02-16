"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _libs = require("../../libs/index");
const _constants = require("../../constants/index");
let IndexController = class IndexController {
    constructor(){
        this.loggerService = new _libs.LoggerService();
        this.index = (_, res, next)=>{
            try {
                return res.status(_constants.HttpStatus.OK).json({
                    status: _constants.HttpStatus.OK,
                    message: _constants.HttpMessage.OK
                });
            } catch (error) {
                return next(error);
            }
        };
        this.health = (req, res, next)=>{
            try {
                this.loggerService.info(`${_constants.ErrorMessage.SERVER_HEALTH} - ${req.originalUrl}`, {
                    controller: IndexController.name,
                    function: 'health',
                    method: req.method,
                    status: _constants.HttpStatus.OK
                });
                return res.status(_constants.HttpStatus.OK).json({
                    status: _constants.HttpStatus.OK,
                    message: _constants.ErrorMessage.SERVER_HEALTH
                });
            } catch (error) {
                return next(error);
            }
        };
    }
};
const _default = IndexController;

//# sourceMappingURL=index.controller.js.map