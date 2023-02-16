import {
  Model, Sequelize, UUID, UUIDV4,
} from 'sequelize';
import { IDataType } from '.';

export default (connection: Sequelize, DataTypes: IDataType) => {
  class JobModel extends Model { }

  JobModel.init(
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
      failedCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
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
      modelName: 'job',
      tableName: 'job',
      paranoid: true,
    },
  );
  return JobModel as unknown as JobModel;
};
