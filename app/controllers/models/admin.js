const {
    Model,
    DataTypes
} = require('sequelize');
const sequelize = require('../../db');

class Admin extends Model {};


Admin.init({
    username: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize: sequelize, // on mentionne la connexion à la BDD
    tableName: "admin"
})

// on exporte la class directement !
module.exports = Admin;
