/* eslint-disable consistent-return */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      const [_, result] = await queryInterface.sequelize.query("SELECT id FROM public.branches WHERE street='Mahu Naka' OR street='Prabhu Nagar' OR street='Vijay Nagar'");
      if (result.rowCount <= 0) {
        return await queryInterface.bulkInsert('branches', [
          {
            uuid: 'c752bc22-580d-4f9d-b069-14cf1565e72c',
            building_no: 11,
            street: 'Sachidanand Nagar',
            landmark: 'Annapurna Road',
            city: 'Indore',
            state: 'Madhya Pradesh',
            country: 'India',
            zip_code: 452001,
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            uuid: '1fe4f1ee-40da-470f-af08-42ffd8d891e7',
            building_no: 101,
            street: 'Patidar Avenue',
            landmark: 'Annapurna Road',
            city: 'Indore',
            state: 'Madhya Pradesh',
            country: 'india',
            zip_code: 452009,
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            uuid: '24b531d7-d127-42be-8011-0ceae68f8c98',
            building_no: 102,
            street: 'Vijay Nagar',
            landmark: 'A.B Rode',
            city: 'Indore',
            state: 'Madhya Pradesh',
            country: 'india',
            zip_code: 452010,
            created_at: new Date(),
            updated_at: new Date(),
          },
        ]);
      }
    } catch (error) {
      // eslint-disable-next-line no-unused-expressions
      process.env.NODE_ENV !== 'production' && console.log({ error });
    }
  },

  down: (queryInterface) => queryInterface.bulkDelete('branches', null, {}),
};
