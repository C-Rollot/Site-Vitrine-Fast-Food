const Plat = require('./models/menu');

const adminController = {
    addToMenuPage : async (req, res) => {
        try {
            res.render('addPage');
        } catch (error) {
            res.status(500).send('Une erreur serveur est survenue.');
        }
    }
}

module.exports = adminController;
