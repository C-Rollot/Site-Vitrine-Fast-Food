const { Admin } = require('./models');

const loginController = {
  getLoginPage: (req, res) => {
    try {
      res.render('login');
    } catch (error) {
      res.status(500).send('Une erreur serveur est survenue.');
    }
  },
  handleLoginForm: async (req, res) => {
    try {
      const { username, password } = req.body;

      // Get the user into the database
      const foundUser = await Admin.findOne({
        where: {
          username,
        },
      });

      // Check that user actually exists
      if (!foundUser) {
        return res.render('login', {
          userError: 'Utilisateur introuvable!',
        });
      }

      // Verify the password
      if (password !== foundUser.password) {
        return res.render('login', {
          error: 'Mot de passe incorrect!',
        });
      }

      // Add user to the session
      req.session.user = foundUser;

      // Delete the session's password for safety
      delete req.session.user.password;

      // Redirect to homepage
      res.redirect('/');
    } catch (error) {
      res.status(500).send('Une erreur serveur est survenue.');
    }
  },
  handleLogout: (req, res) => {
    req.session.user = false;
    res.redirect('/');
  },
};

module.exports = loginController;
