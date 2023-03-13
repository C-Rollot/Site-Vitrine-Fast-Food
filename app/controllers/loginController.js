const loginController = {
    loginPage: (req, res) => {
        try {
            res.render('login');
        } catch (error) {
            res.status(500).send("Une erreur serveur est survenue.");
        }
    },
    handleLoginForm: (req, res) => {
        try {

        } catch (error) {
            res.status(500).send("Une erreur serveur est survenue.");
        }
    }
}

module.exports = loginController;
