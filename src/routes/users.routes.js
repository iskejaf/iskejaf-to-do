const { Router } = require('express');
const router = Router();

const usersCtrl = require('../controllers/users.controller');

// Register
router.get('/user/signup', usersCtrl.renderSignup);
router.post('/user/signup', usersCtrl.signup);

// Access
router.get('/user/signin', usersCtrl.renderSignin);
router.post('/user/signin', usersCtrl.signin);

// Logout
router.get('/user/logout', usersCtrl.logout);

module.exports = router;