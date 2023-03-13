const mainController = {
    homePage: (req, res) => {
        try {
            res.render('home');
        } catch (error) {
            res.status(500).send("Une erreur serveur est survenue.");
        }
    }
}

module.exports = mainController;