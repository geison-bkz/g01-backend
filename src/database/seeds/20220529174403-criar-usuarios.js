module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('People', [{
      name: 'John Doe',
      isBetaMember: false,
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('People', null, {});
  },
};
