const usersCtrl = {};
const user = require('../models/user');

// Register
usersCtrl.renderSignup = (req, res) => {
    res.render('users/signup');
};

usersCtrl.signup = async (req, res) => {
    const errors_msg = [];
    const { name, email, password, confirm_password } = req.body;
    if (password.length <= 4) {
        errors_msg.push({ text: 'La contraseña debe tener más de 4 caracteres' });
    } else if (password != confirm_password) {
        errors_msg.push({ text: 'Las contraseñas no coinciden' });
    }
    if (errors_msg.length > 0) {
        res.render('users/signup', { 
            errors_msg,
            name,
            email
        });
    } else {
        const emailUser = await user.findOne({email: email});
        if (emailUser) {
            errors_msg.push({ text: "El email ya se encuentra registrado"});
            res.render('users/signup', { 
                errors_msg,
                name,
                email,
                password,
                confirm_password
            });
        } else {
            const newUser = new user({name, email, password});
            newUser.password = await newUser.encryptPassword(password);
            await newUser.save();
            req.flash('success_msg', 'El registro se completo satisfactoriamente');
            res.redirect('/user/signin');
        }
    }
};

// Access
usersCtrl.renderSignin = (req, res) => {
    res.render('users/signin');
};

usersCtrl.signin = (req, res) => {
    res.send('entraste');
};

// Logout
usersCtrl.logout = (req, res) => {
    res.send('saliste');
};


module.exports = usersCtrl;