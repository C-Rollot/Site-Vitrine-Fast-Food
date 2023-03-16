const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../db');

class Avis extends Model {}

Avis.init({
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  commentaire: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  sequelize, // on mentionne la connexion à la BDD
  tableName: 'avis',

});

module.exports = Avis;
