const contactController = {
    contactPage: (req, res) => {
        try {
            res.render('contact');
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = contactController;