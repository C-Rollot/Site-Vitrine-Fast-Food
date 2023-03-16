const express = require('express');

// Controllers
const mainController = require('./controllers/mainController');
const menuController = require('./controllers/menuController');
const contactController = require('./controllers/contactController');
const loginController = require('./controllers/loginController');
const adminController = require('./controllers/adminController');

const router = express.Router();

// Define routes and methods that will be called in the controllers

// Display main pages
router.get('/', mainController.getHomePage);
router.get('/menu', menuController.getMenuPage);
router.get('/contact', contactController.getContactPage);
router.get('/comments', contactController.getCommentPage);

// Login / logout
router.get('/login', loginController.getLoginPage);
router.post('/login', loginController.handleLoginForm);
router.get('/logout', loginController.handleLogout);

// Create / Update / Delete meals
router.get('/add', adminController.getCreationPage);
router.post('/add', adminController.createMeal);
router.get('/edit/:id', adminController.getUpdatePage);
router.post('/edit/:id', adminController.updateMeal);
router.get('/delete/:id', adminController.deleteMeal);

// Post customers comments
router.post('/contact', contactController.handleCommentSend);

module.exports = router;
