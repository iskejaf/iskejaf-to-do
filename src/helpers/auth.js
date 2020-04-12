const helpers = {}

helpers.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    req.flash('error', 'Accede a tu cuenta');
    res.redirect('/user/signin');
};

module.exports = helpers;