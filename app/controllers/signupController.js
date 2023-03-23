const { Admin } = require('./models/index');

const signupController = {
  getSignupPage: (req, res) => {
    try {
      res.render('signup');
    } catch (error) {
      res.status(401).send("Vous n'avez pas la permission d'accéder à cette page. Seul un administrateur connecté peut y accéder.");
    }
  },
  handleCreationForm: async (req, res) => {
    console.log('Ca marche!');
  },
};

// TODO: Créer la route pour la page signup
module.exports = signupController;
