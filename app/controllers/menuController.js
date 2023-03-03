const menuController = {
    menuPage: (req, res) => {
        try {
            res.render('menu');
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = menuController;