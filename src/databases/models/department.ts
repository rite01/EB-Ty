import {
  Model, Sequelize, UUID, UUIDV4,
} from 'sequelize';
import { IDataType } from '.';

export default (connection: Sequelize, DataTypes: IDataType) => {
  class DepartmentModel extends Model { }

  DepartmentModel.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
      },
      uuid: {
        type: UUID,
        defaultValue: UUIDV4,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
      },
      description: {
        type: DataTypes.STRING,
      },
      logo: {
        type: DataTypes.STRING,
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
      modelName: 'department',
      tableName: 'department',
      paranoid: true,
    },
  );
  return DepartmentModel as unknown as DepartmentModel;
};
