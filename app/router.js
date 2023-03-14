const express = require('express');

// Controllers
const mainController = require('./controllers/mainController');
const menuController = require('./controllers/menuController');
const contactController = require('./controllers/contactController');
const loginController = require('./controllers/loginController');
const adminController = require('./controllers/adminController');

const router = express.Router();

// Define routes and methods that will be called in the controllers
router.get('/', mainController.homePage);
router.get('/menu', menuController.menuPage);
router.get('/contact', contactController.contactPage);
router.get('/login', loginController.loginPage);
router.post('/login', loginController.handleLoginForm);
router.get('/logout', loginController.handleLogout);
router.get('/add', adminController.addToMenuPage);
router.post('/add', adminController.handleAddToMenu);
router.get('/edit/:id', adminController.editMealPage);
router.post('/edit/:id', adminController.handleMealEdit);

module.exports = router;