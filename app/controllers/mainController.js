const mainController = {
    homePage: (req, res) => {
        try {
            res.render('home');
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = mainController;