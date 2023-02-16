import { Model, Sequelize } from 'sequelize';
import { IDataType } from '.';

export default (connection: Sequelize, DataTypes: IDataType) => {
  class DesignationModel extends Model {
    name!: string;

    level!: number;
  }

  DesignationModel.init(
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
      level: {
        type: DataTypes.ENUM('1', '2', '3', '4', '5', '6', '7'),
        defaultValue: '1',
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
      modelName: 'designation',
      tableName: 'designation',
      paranoid: true,
    },
  );
  return DesignationModel as unknown as DesignationModel;
};
