const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface) => {
    try {
      const [_, admin] = await queryInterface.sequelize.query("SELECT id FROM public.roles WHERE name='admin'");
      if (admin.rowCount <= 0) {
        throw new Error('admin not found!');
      }

      const [__, superAdminResult] = await queryInterface.sequelize.query("SELECT id FROM public.roles WHERE name='super_admin'");
      if (superAdminResult.rowCount <= 0) {
        throw new Error('superAdminResult not found!');
      }
      const adminSalt = await bcrypt.genSalt();
      const adminPassword = await bcrypt.hash('admin@12345', adminSalt);
      const superAdminPassword = await bcrypt.hash('super_admin@12345', adminSalt);

      queryInterface.bulkInsert('users', [
        {
          name: 'Admin',
          uuid: '29f8fe4a-8cd1-41f4-aa04-5c400644a181',
          email: 'admin@thoughtwin.com',
          password: adminPassword,
          created_at: new Date(),
          updated_at: new Date(),
          role_id: admin.rows[0].id,
        },
        {
          name: 'SuperAdmin',
          uuid: '29f8fe4a-8cd1-41f4-aa04-5c400644a181',
          email: 'super_admin@thoughtwin.com',
          password: superAdminPassword,
          created_at: new Date(),
          updated_at: new Date(),
          role_id: superAdminResult.rows[0].id,
        },
      ]);
    } catch (error) {
      // eslint-disable-next-line no-unused-expressions
      process.env.NODE_ENV !== 'production' && console.log({ error });
    }
  },
  down: (queryInterface) => queryInterface.bulkDelete('users', null, {}),
};
