const db = require ('../Configs/db'); //<-sesuaikan dengan (variable).query

const wishlistModel = {

    getWishlist: (id) => {
        return new Promise((resolve, reject) => { 
            db.query('SELECT books.id_book, books.title, books.image_url, FROM wishlist JOIN books ON books.id_book=wishlist.id_book WHERE wishlist.id=?', id, (err, results) => {
                if(!err) {
                    resolve(results);
                } else {
                    reject(new Error(err))
                }

            }); 
        }); 
    },

    addWishlist: (id, id_book) => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO wishlist (id, id_book) VALUES (?,?)', [id, id_book], (err, results) => {
                if(!err){
                    resolve(results);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },
    deleteWishlist: (id, id_book) => {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM wishlist WHERE id=? AND id_book=?', [id, id_book], (err, results) => {
                if(!err){
                    resolve(results);
                } else {
                    reject(new Error(err));
                }
            })
        })
    }
}

module.exports = wishlistModel;