// On require dotenv pour avoir accès aux variables d'environnement (port et connexion à la db)
require('dotenv').config();

const path = require('path');
const express = require('express');
const router = require('./app/router');

const port = process.env.PORT || 1664;

const app = express();

// On initialise ejs et on lui indique le chemin des vues
app.set('view engine', 'ejs');
app.set('views', './app/views');

// On indique à express le chemin des fichiers statiques
app.use(express.static(path.join(__dirname, 'public/css')));
app.use(express.static(path.join(__dirname, 'dist')));


app.use(router);

// On démarre le serveur
app.listen(port, () => {
    console.log(`Server is on, listening on ${port}`);
});
