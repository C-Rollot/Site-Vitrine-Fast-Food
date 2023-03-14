const { Plat, Admin } = require('./models');

const adminController = {
    // Page display
    addToMenuPage : async (req, res) => {
        try {
            res.render('addPage');
        } catch (error) {
            res.status(500).send('Une erreur serveur est survenue.');
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

            console.log(addedMeal);

            res.redirect('/menu');
        } catch (error) {
            res.status(500).send('Une erreur serveur est survenue.');
            console.error(error);
        }
    }
}

module.exports = adminController;

//! Arrêt le 13/03 21:55, prochaines étapes: Régler le souci d'affichage des photos / Sécuriser l'accès à l'espace admin / Finir feature modification de plat / Faire feature de suppression de plat 