const { Sequelize } = require('sequelize');
const config = require('../config/database');  // Certifique-se de que o caminho esteja correto

// Defina o ambiente
const env = process.env.NODE_ENV || 'development';
const sequelizeConfig = config[env];

// Crie a instância do Sequelize
const sequelize = new Sequelize(
  sequelizeConfig.database,
  sequelizeConfig.username,
  sequelizeConfig.password,
  {
    host: sequelizeConfig.host,
    dialect: sequelizeConfig.dialect,
  }
);

module.exports = sequelize;
