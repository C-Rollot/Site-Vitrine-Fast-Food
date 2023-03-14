const { Model, DataTypes } = require('sequelize');
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
    sequelize: sequelize, // Mention DB connection
    tableName: "admin"
})


module.exports = Admin;
