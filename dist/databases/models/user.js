"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _sequelize = require("sequelize");
const _enumConstants = require("../../constants/enum.constants");
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
const _default = (connection, DataTypes)=>{
    let UserModel = class UserModel extends _sequelize.Model {
        static associate({ roles , userProfile  }) {
            this.belongsTo(roles, {
                foreignKey: 'roleId',
                as: 'role'
            });
            this.hasOne(userProfile, {
                foreignKey: 'userId',
                as: 'profile_details'
            });
        }
    };
    UserModel.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.BIGINT
        },
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: {
            type: DataTypes.STRING
        },
        phoneNumber: {
            type: DataTypes.STRING
        },
        roleId: {
            type: DataTypes.BIGINT
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
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
        modelName: 'users',
        paranoid: true
    });
    UserModel.beforeCreate(function() {
        var _ref = _asyncToGenerator(function*(record) {
            if (!record.roleId) {
                const foundRole = yield connection.models.roles.findOne({
                    where: {
                        name: _enumConstants.UserRoles.USER
                    }
                });
                if (!foundRole) {
                    throw new Error('role not found');
                }
                record.roleId = foundRole.id;
            }
            return record;
        });
        return function(record) {
            return _ref.apply(this, arguments);
        };
    }());
    return UserModel;
};

//# sourceMappingURL=user.js.map