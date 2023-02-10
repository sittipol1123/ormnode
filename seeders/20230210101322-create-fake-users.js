'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('users', [{
        name: 'John Doe',
        email: 'john@gmail.com',
        role: 'admin',
        uuid: 'b2ee1a07-dd3c-4e56-8967-879fa6b5de55',
        createdAt: '2023-02-10T10:11:53.480Z',
        updatedAt: '2023-02-10T10:11:53.480Z'
     }, {
        name: 'jane Doe',
        email: 'jane@gmail.com',
        role: 'admin',
        uuid: 'b2ee1a07-dd3c-4e56-8967-879fa6b5de32',
        createdAt: '2023-02-10T10:11:53.480Z',
        updatedAt: '2023-02-10T10:11:53.480Z'
     }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
