import { Model, Sequelize } from 'sequelize';
import { IDataType } from '.';

export default (connection: Sequelize, DataTypes: IDataType) => {
  class BirthdayReminderModel extends Model { }

  BirthdayReminderModel.init(
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
      },
      status: {
        type: DataTypes.STRING,
      },
      failedCount: {
        type: DataTypes.INTEGER,
      },
      errorMessage: {
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
      modelName: 'birthday_reminder',
      paranoid: true,
    },
  );
  return BirthdayReminderModel as unknown as BirthdayReminderModel;
};
