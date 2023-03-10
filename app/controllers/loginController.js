const loginController = {
    loginPage: (req, res) => {
        try {
            res.render('login');
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = loginController;