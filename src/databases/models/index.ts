import { DataTypes, Sequelize } from 'sequelize';
import { config } from '../../config';

const dbConfig = require('../../config/config').development;

type IDatabase = { sequelize: Sequelize };
export type IDataType = typeof DataTypes;

const {
  DB_DATABASE, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT,
} = config.DB;

const sequelize = new Sequelize(
  `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}?ssl=true&sslmode=no-verify`,
  {
    // logging: process.env.NODE_ENV === 'development' ? console.log : false,
    logging: false,
  },
);

const db = {};

const role = require('./role').default(sequelize, DataTypes);
const department = require('./department').default(sequelize, DataTypes);
const birthdayReminder = require('./birthdayReminder').default(
  sequelize,
  DataTypes,
);
const branch = require('./branch').default(sequelize, DataTypes);
const designation = require('./designation').default(sequelize, DataTypes);
const template = require('./template').default(sequelize, DataTypes);
const userProfile = require('./userProfile').default(sequelize, DataTypes);
const userVerification = require('./userVerification').default(
  sequelize,
  DataTypes,
);
const userModel = require('./user').default(sequelize, DataTypes);

db[role.name] = role;
db[birthdayReminder.name] = birthdayReminder;
db[branch.name] = branch;
db[designation.name] = designation;
db[userProfile.name] = userProfile;
db[userVerification.name] = userVerification;
db[department.name] = department;
db[template.name] = template;
db[userModel.name] = userModel;

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

(db as IDatabase).sequelize = sequelize;

export default (db as IDatabase).sequelize;
