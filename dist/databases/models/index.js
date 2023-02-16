"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _sequelize = require("sequelize");
const _config = require("../../config/index");
const dbConfig = require('../../config/config').development;
const { DB_DATABASE , DB_USER , DB_PASSWORD , DB_HOST , DB_PORT  } = _config.config.DB;
const sequelize = new _sequelize.Sequelize(`postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}?ssl=true&sslmode=no-verify`, {
    logging: false
});
const db = {};
const role = require('./role').default(sequelize, _sequelize.DataTypes);
const department = require('./department').default(sequelize, _sequelize.DataTypes);
const birthdayReminder = require('./birthdayReminder').default(sequelize, _sequelize.DataTypes);
const branch = require('./branch').default(sequelize, _sequelize.DataTypes);
const designation = require('./designation').default(sequelize, _sequelize.DataTypes);
const template = require('./template').default(sequelize, _sequelize.DataTypes);
const userProfile = require('./userProfile').default(sequelize, _sequelize.DataTypes);
const userVerification = require('./userVerification').default(sequelize, _sequelize.DataTypes);
const userModel = require('./user').default(sequelize, _sequelize.DataTypes);
db[role.name] = role;
db[birthdayReminder.name] = birthdayReminder;
db[branch.name] = branch;
db[designation.name] = designation;
db[userProfile.name] = userProfile;
db[userVerification.name] = userVerification;
db[department.name] = department;
db[template.name] = template;
db[userModel.name] = userModel;
Object.keys(db).forEach((modelName)=>{
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});
db.sequelize = sequelize;
const _default = db.sequelize;

//# sourceMappingURL=index.js.map