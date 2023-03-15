const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../db');

class Plat extends Model{};


Plat.init({
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    image: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize: sequelize, // on mentionne la connexion à la BDD
    tableName: "plat"

})


module.exports = Plat;
