const { Sequelize } = require('sequelize');
const pg = require('pg');

require('dotenv').config();

const pgUrl = 'postgres://slk:oisifman@localhost/skyline';

const sequelize = new Sequelize(pgUrl, {
    define: {
        underscored: true
    }
});

module.exports = sequelize;