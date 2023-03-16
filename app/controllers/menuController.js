const { Plat } = require('./models');

const menuController = {

  getMenuPage: async (req, res) => {
    // Get the data from the DB and send it to the view
    try {
      const menuData = await Plat.findAll();

      res.render('menu', { menuData });
    } catch (error) {
      res.status(500).send('Une erreur serveur est survenue.');
    }
  },
};

module.exports = menuController;
