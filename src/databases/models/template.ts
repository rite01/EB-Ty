import { Model, Sequelize } from 'sequelize';

export default (connection: Sequelize, DataTypes:any) => {
  class TemplateModel extends Model { }

  TemplateModel.init(
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
      contentBody: {
        type: DataTypes.STRING,
      },
      content: {
        type: DataTypes.JSON,
      },
      type: {
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
      modelName: 'template',
      paranoid: true,
    },
  );
  return TemplateModel as unknown as TemplateModel;
};
// template.belongsTo(userModel, { as: 'user', foreignKey: 'userId' });
