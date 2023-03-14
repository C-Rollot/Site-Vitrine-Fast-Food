const { Avis } = require('./models');

const contactController = {
    // Display page
    contactPage: (req, res) => {
        try {
            res.render('contact');
        } catch (error) {
            res.status(500).send("Une erreur serveur est survenue.");
        }
    },
    handleCommentSend: async (req, res) => {
        const { firstName, lastName, email, commentaire } = req.body;

        try {
            const comment = await Avis.create({
                first_name: firstName,
                last_name: lastName,
                email,
                commentaire
            });

            res.redirect('/comments');
        } catch (error) {
            res.status(500).send("Une erreur serveur est survenue.");
            console.log(error);
        }
    },
    commentPage: async (req, res) => {
        try {
            const comment = await Avis.findAll();

            res.render('comments', { comment });
        } catch (error) {
            res.status(500).send("Une erreur serveur est survenue.");
        }
    }
}

module.exports = contactController;
