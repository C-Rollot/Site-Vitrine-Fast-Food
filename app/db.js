// Import Sequelize
const { Sequelize } = require('sequelize');
const pg = require('pg');

require('dotenv').config();

// Connect to the database
const pgUrl = process.env.PG_URL;

const sequelize = new Sequelize(pgUrl, {
    // underscored_true converts values in the database to snake_case
    define: {
        underscored: true
    }
});

module.exports = sequelize;
