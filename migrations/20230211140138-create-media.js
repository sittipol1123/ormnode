'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('media', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      filename: {
        type: DataTypes.STRING,
        allowNull: false
      },
      filesize: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      relation_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      relation_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      table_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('media');
  }
};