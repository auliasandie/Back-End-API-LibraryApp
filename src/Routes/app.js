var express = require('express');
var router = express.Router();
const librarycontroller = require('../Controllers/app');
const {verifyToken, verifyAdmin} = require('../Helpers/Middleware/auth');
const userController = require('../Controllers/user');
const wishlistController = require('../Controllers/wishlist');
const borrowController = require('../Controllers/borrow');

// Register User
router.post('/register', userController.registerUser);

//Login User
router.post('/login', userController.loginUser);

// //Register Admin
router.post('/register/admin', verifyToken, verifyAdmin, userController.registerAdmin);

//GET POPULAR BOOKS
router.get('/popular', librarycontroller.getPopularBooks);
 
//GET BORROW
router.get('/borrow', borrowController.getBorrow); 

//GET WISHLIST
router.get('/wishlist/:id', wishlistController.getWishlist);

//ADD WISHLIST
router.post('/addwishlist', wishlistController.addWishlist);

//DELETE WISHLIST
router.delete('/deletewishlist/:id_book', wishlistController.deleteWishlist);

//ADD BORROW
router.post('/addborrow/', borrowController.addBorrow);

//UPDATE BORROW
router.put('/updateborrow', borrowController.updateBorrow);

/* GET users/admin listing. */ 
   
//GET ALL BOOK
router.get('/',librarycontroller.getAllBooks);
router.get('/books/:id_book',librarycontroller.getAllBooksById);

//GET GENRE
router.get('/genres', librarycontroller.getAllGenre);
router.get('/genreid/:id_genre', librarycontroller.getGenreId);
router.get('/genre/:genre', librarycontroller.getByGenre);

//GET STATUS
router.get('/status/:status', librarycontroller.getByStatus);

//GET YEAR
router.get('/years/', librarycontroller.getAllYear);
router.get('/yearid/:id_year', librarycontroller.getByYearId);
router.get('/year/:year', librarycontroller.getByYear);

//GET TITLE
router.get('/title/:title', librarycontroller.getByTitle);

//POST BOOK
router.post("/create",librarycontroller.postBooks);

//POST GENRE
router.post('/genre', librarycontroller.postGenre);

//EDIT BOOK
router.put('/edit/:id_book', librarycontroller.putBookbyId);

//DELETE BOOK
router.delete('/delete/:id_book', librarycontroller.deleteBooks);

//


module.exports = router;
