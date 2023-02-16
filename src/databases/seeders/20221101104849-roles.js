/* eslint-disable consistent-return */
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface) => {
    try {
      const [_, adminRole] = await queryInterface.sequelize.query(
        "SELECT id FROM public.roles WHERE name='admin'",
      );
      const [__, superAdminRole] = await queryInterface.sequelize.query(
        "SELECT id FROM public.roles WHERE name='super_admin'",
      );
      const [___, userRole] = await queryInterface.sequelize.query(
        "SELECT id FROM public.roles WHERE name='admin'",
      );
      if (
        adminRole.rowCount <= 0
        && superAdminRole.rowCount <= 0
        && userRole.rowCount <= 0
      ) {
        return await queryInterface.bulkInsert('roles', [
          {
            uuid: '08dfb76f-e3c8-481d-9ecd-878ed600d6e8',
            name: 'admin',
            is_active: true,
            created_at: new Date(),
          },
          {
            uuid: '40b7d4fb-0442-45d2-a3ad-1a96128549d3',
            name: 'user',
            is_active: true,
            created_at: new Date(),
          },
          {
            uuid: '443f9af7-78b4-4354-b484-a50c23d56d85',
            name: 'super_admin',
            is_active: true,
            created_at: new Date(),
          },
        ]);
      }
    } catch (error) {
      // eslint-disable-next-line no-unused-expressions
      process.env.NODE_ENV !== 'production' && console.log({ error });
    }
  },
  down: (queryInterface) => queryInterface.bulkDelete('roles', null, {}),
};
