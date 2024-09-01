'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pessoa', {
      Id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      Nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      CPF: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Telefone: {
        type: Sequelize.STRING,
      },
        
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('pessoa');
  }
};