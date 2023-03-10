const express = require('express');

// Controllers
const mainController = require('./controllers/mainController');
const menuController = require('./controllers/menuController');
const contactController = require('./controllers/contactController');

const router = express.Router();

// Define routes and methods that will be called in the controllers
router.get('/', mainController.homePage);
router.get('/menu', menuController.menuPage);
router.get('/contact', contactController.contactPage);

module.exports = router;