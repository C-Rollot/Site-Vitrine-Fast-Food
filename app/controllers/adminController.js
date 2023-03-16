const { Plat } = require('./models');

const adminController = {
  // New meal page display
  getCreationPage: (req, res) => {
    try {
      if (res.locals.user) {
        res.render('addPage');
      } else {
        res.status(401).send("Vous n'avez pas la permission d'accéder à cette page. Seul un administateur connecté peut y accéder.");
      }
    } catch (error) {
      res.status(500).send('Une erreur serveur est survenue.');
    }
  },
  // Handle form submission
  createMeal: async (req, res) => {
    const {
      name, description, price, image,
    } = req.body;

    try {
      await Plat.create({
        name,
        description,
        price,
        image,
        admin_id: 1,
      });

      res.redirect('/menu');
    } catch (error) {
      res.status(500).send('Une erreur serveur est survenue.');
    }
  },
  // Edit meal page display
  getUpdatePage: (req, res) => {
    try {
      if (res.locals.user) {
        res.render('editPage');
      } else {
        res.status(401).send("Vous n'avez pas la permission d'accéder à cette page. Seul un administrateur connecté peut y accéder.");
      }
    } catch (error) {
      res.status(500).send('Une erreur serveur est survenue.');
    }
  },
  // Handle form submission
  updateMeal: async (req, res) => {
    const {
      name, description, price, image,
    } = req.body;
    const mealId = req.params.id;

    try {
      const foundMeal = await Plat.findByPk(mealId);

      foundMeal.update({
        name,
        description,
        price,
        image,
      });

      res.redirect('/menu');
    } catch (error) {
      res.status(500).send('Une erreur serveur est survenue.');
    }
  },
  // Delete a meal
  deleteMeal: async (req, res) => {
    const mealId = req.params.id;

    try {
      const foundMeal = await Plat.findByPk(mealId);

      foundMeal.destroy();

      res.redirect('/menu');
    } catch (error) {
      res.status(500).send('Une erreur serveur est survenue.');
    }
  },
};

module.exports = adminController;
