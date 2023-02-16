"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "scheduleReminder", {
    enumerable: true,
    get: ()=>scheduleReminder
});
const cron = require('node-cron');
const scheduleReminder = ()=>{
    cron.schedule('*/1 * * * * *', ()=>{});
};

//# sourceMappingURL=cron.service.js.map