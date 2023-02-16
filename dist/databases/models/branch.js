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
    let BranchModel = class BranchModel extends _sequelize.Model {
        static associate({ userProfile  }) {
            this.hasMany(userProfile, {
                foreignKey: 'branchId',
                as: 'branchDetails',
                constraints: false
            });
        }
    };
    BranchModel.init({
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
        buildingNo: {
            type: DataTypes.INTEGER
        },
        street: {
            type: DataTypes.STRING
        },
        landmark: {
            type: DataTypes.STRING
        },
        city: {
            type: DataTypes.STRING
        },
        state: {
            type: DataTypes.STRING
        },
        country: {
            type: DataTypes.STRING
        },
        zipCode: {
            type: DataTypes.INTEGER
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
        modelName: 'branches',
        tableName: 'branches',
        paranoid: true
    });
    return BranchModel;
};

//# sourceMappingURL=branch.js.map