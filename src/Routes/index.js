var express = require('express');
var router = express.Router();
const library = require('./app')
// const registerUser = require('./user')
// const registerUser = require('./app')

/* GET home page. */
router.use('/library',library);

// //Register
// router.use('/libraryregister', registerUser);
module.exports = router;
