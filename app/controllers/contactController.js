const contactController = {
    contactPage: (req, res) => {
        try {
            res.render('contact');
        } catch (error) {
            res.status(500).send("Une erreur serveur est survenue.");
        }
    }
}

module.exports = contactController;