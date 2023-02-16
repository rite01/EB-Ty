import { Model, Sequelize } from 'sequelize';
import { IDataType } from '.';

export default (connection: Sequelize, DataTypes:IDataType) => {
  class UserProfile extends Model {
    static associate({
      users, branches, department, designation,
    }) {
      this.belongsTo(users, {
        foreignKey: 'userId',
        as: 'userDetails',
      });
      this.belongsTo(branches, {
        foreignKey: 'branchId',
        as: 'branchDetails',
      });
      this.belongsTo(department, {
        foreignKey: 'departmentId',
        as: 'departmentDetails',
      });
      this.belongsTo(designation, {
        foreignKey: 'designationId',
        as: 'designationDetails',
      });
    }
  }

  UserProfile.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
      },
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      userId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      designationId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      branchId: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      departmentId: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      profileUrl: {
        type: DataTypes.STRING,
      },
      dateOfBirth: {
        type: DataTypes.DATE,
      },
      dateOfJoining: {
        type: DataTypes.DATE,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
    },
    {
      timestamps: true,
      sequelize: connection,
      underscored: true,
      tableName: 'users_profile',
      modelName: 'userProfile',
      paranoid: true,
    },
  );
  return UserProfile as unknown as UserProfile;
};
