const express = require('express');

// Controllers
const mainController = require('./controllers/mainController');
const menuController = require('./controllers/menuController');
const contactController = require('./controllers/contactController');

const router = express.Router();

// On définit les routes et les méthodes qui seront appelées dans le controller
router.get('/', mainController.homePage);
router.get('/menu', menuController.menuPage);
router.get('/contact', contactController.contactPage);

module.exports = router;