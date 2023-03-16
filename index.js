// Require dotenv to get access to env variables (port and DB conenection)
require('dotenv').config();

const path = require('path');
const express = require('express');
const session = require('express-session');
const router = require('./app/router');

const port = process.env.PORT || 1664;

const app = express();

// Initialize express-session (used for admin authentication)
app.use(
  session({
    saveUninitialized: true,
    resave: true,
    secret: process.env.SECRET,
  }),
);

app.use((req, res, next) => {
  res.locals = req.session;
  next();
});

// Initialize EJS and give it views path
app.set('view engine', 'ejs');
app.set('views', './app/views');

// Indicate to Express path to static files
app.use(express.static(path.join(__dirname, './public')));
app.use(express.static(path.join(__dirname, 'dist')));

app.use(express.urlencoded({ extended: true }));

app.use(router);

// Start server
app.listen(port, () => {
  console.log(`Server is on, listening on ${port}`);
});
