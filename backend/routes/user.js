
//importer express pour utiliser "router"
const express = require("express");
const router = express.Router();

//importer le "controller"
const userCtrl = require('../controllers/user');

//la route (endpoint) signup
router.post('/signup', userCtrl.signup);

//la route(endpoint) login
router.post('/login', userCtrl.login);


//exporter le module
module.exports = router;