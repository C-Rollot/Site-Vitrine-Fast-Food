const { Plat } = require('./models');

const menuController = {

    menuPage: async (req, res) => {

        // Get the data from the DB and send it to the view
        try {
            const menuData = await Plat.findAll({
                include: "admin"
            });
            res.render('menu', { menuData });
        } catch (error) {
            res.status(500).send("Une erreur serveur est survenue.");
        }
    }
}

module.exports = menuController;
