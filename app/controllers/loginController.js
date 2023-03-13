const Admin = require('./models/admin');

const loginController = {
    loginPage: (req, res) => {
        try {
            res.render('login');
        } catch (error) {
            res.status(500).send("Une erreur serveur est survenue.");
        }
    },
    handleLoginForm: async (req, res) => {
        try {
            const { username, password } = req.body;

            // Get the user into the database
            const foundUser = await Admin.findOne({
                where: {
                    username
                }
            });
            console.log(foundUser);

            // Check that the user actually exists
            if (!foundUser) {
                throw new Error("Utilisateur introuvable!");
            }
            console.log("L'utilisateur existe");

            // Verify the password
            if (password !== foundUser.password) {
                return res.render('login', {
                    error: "Mot de passe incorrect!"
                });
            }
            console.log("Mot de passe correct");

            // Add the user to the session
            req.session.user = foundUser;
            console.log("Utilisateur ajouté à la session");

            // Delete the session's password for safety
            delete req.session.user.password;
            console.log("MDP supprimé");

            // Redirect to homepage
            res.redirect('/');
        } catch (error) {
            res.status(500).send("Une erreur serveur est survenue.");
            console.log(error);
        }
    },
    handleLogout: (req, res) => {
        req.session.user = false;
        res.redirect('/');
    }
}

module.exports = loginController;
