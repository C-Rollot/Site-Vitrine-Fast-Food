const { Sequelize } = require('sequelize');
const pg = require('pg');

require('dotenv').config();

const pgUrl = 'postgres://oisifman:skyline@localhost/slk';

const sequelize = new Sequelize(pgUrl, {
    define: {
        underscored: true
    }
});

module.exports = sequelize;
