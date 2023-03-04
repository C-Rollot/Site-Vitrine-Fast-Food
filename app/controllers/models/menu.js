const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../db');

class Plat extends Model{};


Plat.init({
    name: { type: DataTypes.TEXT, allowNull: false },
    price: { type: DataTypes.NUMBER, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false }
}, {
    sequelize,
    tableName: "plat"
});

module.exports = Plat;