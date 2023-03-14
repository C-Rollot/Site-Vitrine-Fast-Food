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
router.get('/', mainController.homePage);
router.get('/menu', menuController.menuPage);
router.get('/contact', contactController.contactPage);
router.get('/comments', contactController.commentPage);

// Login / logout
router.get('/login', loginController.loginPage);
router.post('/login', loginController.handleLoginForm);
router.get('/logout', loginController.handleLogout);

// Create / Update / Delete meals
router.get('/add', adminController.addToMenuPage);
router.post('/add', adminController.handleAddToMenu);
router.get('/edit/:id', adminController.editMealPage);
router.post('/edit/:id', adminController.handleMealEdit);
router.get('/delete/:id', adminController.handleMealDelete);

// Post customers comments
router.post('/contact', contactController.handleCommentSend);

module.exports = router;
