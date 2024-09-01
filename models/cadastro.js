const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

class Pessoa extends Model {}

Pessoa.init({
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'Id',
    },
    Nome: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'Nome',
    },
    CPF: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        field: 'CPF',
    },
    Telefone: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'Telefone',
    },
}, {
    sequelize,
    modelName: 'Pessoa',
    tableName: 'pessoa',
    timestamps: false,
});

module.exports = { Pessoa };
