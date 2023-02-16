import { Model, Sequelize } from 'sequelize';
import { UserRoles } from '../../constants/enum.constants';
import { IDataType } from '.';

export default (connection: Sequelize, DataTypes:IDataType) => {
  class UserModel extends Model {
    password!: string;

    static associate({ roles, userProfile }) {
      this.belongsTo(roles, {
        foreignKey: 'roleId',
        as: 'role',
      });
      this.hasOne(userProfile, {
        foreignKey: 'userId',
        as: 'profile_details',
      });
    }
  }

  UserModel.init(
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
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
      },
      phoneNumber: {
        type: DataTypes.STRING,
      },
      roleId: {
        type: DataTypes.BIGINT,
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
      modelName: 'users',
      paranoid: true,
    },
  );
  UserModel.beforeCreate(async (record: any) => {
    if (!record.roleId) {
      const foundRole : any = await connection.models.roles.findOne({
        where: {
          name: UserRoles.USER,
        },
      });
      if (!foundRole) {
        throw new Error('role not found');
      }
      record.roleId = foundRole.id;
    }
    return record;
  });
  return UserModel as unknown as UserModel;
};
