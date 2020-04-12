const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

const userModel = require('../models/user');

passport.use(new localStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {
    // Match username (email)
    const user = await userModel.findOne({email});
    if (!user) {
        return done(null, false, {message: 'Usuario no encontrado'});
    } else {
        // Match Password
        const match = await user.matchPassword(password);
        if (match) {
            return done(null, user);
        } else {
            return done(null, false, {message: 'La contraseña no es correcta'});
        }
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    userModel.findById(id, (err, user) => {
        done(err, user);
    })
});