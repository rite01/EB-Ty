"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _app = _interopRequireDefault(require("./app"));
const _cron = require("./services/cron/index");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
process.on('uncaughtException', (err)=>{
    console.log(`UNCAUGHT EXCEPTION! ${err === null || err === void 0 ? void 0 : err.name}: ${err === null || err === void 0 ? void 0 : err.message}`);
});
_app.default.bootstrap();
(0, _cron.scheduleReminder)();

//# sourceMappingURL=index.js.map