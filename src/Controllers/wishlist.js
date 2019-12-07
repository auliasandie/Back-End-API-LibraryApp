const wishlistModel = require('../Models/wishlist');
const formResponse = require('../Helpers/formResponse');

const wishlistController = {
    getWishlist : (req, res) => {
        console.log(req.body)
        const idr = req.body.id;

        wishlistModel
        .getWishlist(id)
        .then(result => {
            formResponse.success(res, 200, result);
        })
        .catch(error => {
            res.json(error);
        })
    },

    addWishlist: (req, res) => { 
        const id = req.body.id;
        const id_book = req.body.id_book;

        wishlistModel
        .addWishlist(id, id_book)
        .then(result => {
            const data = { 
                id,
                id_book
            }
            formResponse.success(res, 200, result, data);
        })
        .catch(error => {
            res.json(error);
        })
    },

    deleteWishlist: (req, res) => {
        //console.log(req.body)
        const id = req.body.id;
        const id_book = req.body.id_book;

        wishlistModel
        .deleteWishlist(id, id_book)
        .then(result => {
            const data = {
                id,
                id_book
            }
            formResponse.success(res, 200, result, data);
        })
        .catch(error => {
            res.json(error);
        })
    }
}

module.exports = wishlistController