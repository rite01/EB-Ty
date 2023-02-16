import { Model, Sequelize } from 'sequelize';
import { IDataType } from '.';

export default (connection: Sequelize, DataTypes:IDataType) => {
  class UserVerification extends Model { }

  UserVerification.init(
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
      reset_token: {
        type: DataTypes.STRING,
      },
      resetTokenAt: {
        type: DataTypes.DATE,
      },
      userId: {
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
      modelName: 'users_verification',
      paranoid: true,
    },
  );
  return UserVerification as unknown as UserVerification;
};
// userVerification.belongsTo(userModel, { foreignKey: 'userId' });
