"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _sequelize = require("sequelize");
const _default = (connection, DataTypes)=>{
    let JobModel = class JobModel extends _sequelize.Model {
    };
    JobModel.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.BIGINT
        },
        uuid: {
            type: _sequelize.UUID,
            defaultValue: _sequelize.UUIDV4,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            unique: true
        },
        failedCount: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: true,
            type: DataTypes.DATE
        },
        deletedAt: {
            allowNull: true,
            type: DataTypes.DATE
        }
    }, {
        timestamps: true,
        sequelize: connection,
        underscored: true,
        modelName: 'job',
        tableName: 'job',
        paranoid: true
    });
    return JobModel;
};

//# sourceMappingURL=jobs.js.map