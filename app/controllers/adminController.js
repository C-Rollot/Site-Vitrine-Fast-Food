const { localsName } = require('ejs');
const { Plat } = require('./models');

const adminController = {
    // New meal page display
    addToMenuPage: (req, res) => {
        try {
            if (res.locals.user) {
                res.render('addPage');
            } else {
                res.status(403).send("Vous n'avez pas la permission d'accéder à cette page. Seul un administateur connecté peut y accéder.");
            }
        } catch (error) {
            res.status(500).send('Une erreur serveur est survenue.');
            console.log(error);
        }
    },
    // Handle form submission
    handleAddToMenu: async (req, res) => {
        const { name, description, price, image } = req.body;

            try {
            const addedMeal = await Plat.create({
                name,
                description,
                price,
                image,
                admin_id: 1
            })

            res.redirect('/menu');
        } catch (error) {
            res.status(500).send('Une erreur serveur est survenue.');
            console.error(error);
        }
    },
    // Edit meal page display
    editMealPage: (req, res) => {
        try {
            if(res.locals.user) {
                res.render('editPage');
            } else {
                res.status(403).send("Vous n'avez pas la permission d'accéder à cette page. Seul un administrateur connecté peut y accéder.");
            }
        } catch (error) {
            res.status(500).send('Une erreur serveur est survenue.');
        }
    },
    // Handle form submission
    handleMealEdit: async (req, res) => {
        const { name, description, price, image } = req.body;
        const mealId = req.params.id;

        try {
            const foundMeal = await Plat.findByPk(mealId);

            foundMeal.update({
                name,
                description,
                price,
                image
            });

            res.redirect('/menu');
        } catch (error) {
            res.status(500).send('Une erreur serveur est survenue.');
            console.log(error);
        }
    }
}

module.exports = adminController;

//! Arrêt le 13/03 21:55, prochaines étapes: Régler le souci d'affichage des photos / Finir feature modification de plat / Faire feature de suppression de plat 