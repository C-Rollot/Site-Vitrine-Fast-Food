const { Plat } = require('./models/menu');

const menuController = {

    menuPage: async (req, res) => {

        try {
            const menuData = await Plat.findAll();
            console.log(menuData);

            res.render('menu', { menuData });
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = menuController;


//! Arrêt le 04/03 à 02:44, erreur de récupération de données sur findAll()