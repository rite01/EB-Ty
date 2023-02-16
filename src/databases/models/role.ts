import {
  Model, Optional, Sequelize,
} from 'sequelize';
import { IDataType } from '.';
import { IRole } from '../../interfaces';

export interface RoleInput extends Optional<IRole, 'id'> {}
export interface RoleOutput extends Required<IRole> {}

export default (connection: Sequelize, DataTypes: IDataType) => {
  class RoleModel extends Model {
    id!: number;

    uuid!: string;

    name!: string;

    isActive!: boolean;

    static associate({ users }) {
      this.hasMany(users, {
        foreignKey: 'roleId',
        as: 'users',
      });
    }
  }

  RoleModel.init(
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
        unique: true,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
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
      modelName: 'roles',
      paranoid: true,
    },
  );
  return RoleModel as unknown as RoleModel;
};
