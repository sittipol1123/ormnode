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
        uuid: 'b2ee1a07-dd3c-4e56-8967-879fa6b5de55',
        name: 'sittipol',
        email: 'sittipol@gmail.com',
        username: 'sittipol',
        password: '$2a$12$oXky7pbCWmLvzQPjOdoibucntsGX..FFDi0JBzsdY2kP3yzuQuiMO',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
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
