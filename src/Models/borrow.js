const db = require ('../Configs/db'); //<-sesuaikan dengan (variable).query

const borrowModel = {

    getBorrow: (id_books) => {
        return new Promise ((resolve, reject) => {
            db.query('SELECT books.title, books.image_url, user.fullname FROM user JOIN borrow on borrow.id=user.id JOIN books ON books.id_book= borrow.id_book', id_books, (err, results) => {
                if(!err) {
                    resolve(results);
                } else {
                    reject(new Error(err))
                }
            }) 
        })
    },

    addBorrow: (id_book) => {
        return new Promise((resolve, reject) =>
         {
            db.query('INSERT INTO borrow SET ?', [id_book], (err, results) => {
                if(!err){
                    resolve(results);
                } else {
                    reject(new Error(err));
                }
            });
        });
    },

    updateBorrow: (body) => {
        return new Promise((resolve, reject) => {
            db.query('UPDATE borrow set return_date="12/12/2019" WHERE id_borrow=5',[body], (err, results)=>{
                if(!err){
                    resolve(results);
                } else {
                    reject(new Error(err));
                }
            }) 
        }) 
        },

    // deleteBorrow: (email, id_book) => {
    //     return new Promise((resolve, reject) => {
    //         db.query('DELETE FROM borrow WHERE id_borrow=?, id_book=?, email=?, borrow_date=? AND return_date=?', [email, id_book], (err, results)=> {
    //             if (!err){
    //                 resolve(results);
    //             } else {
    //                 reject(new Error(err));
    //             }
    //         })
    //     })
    // }

}

module.exports = borrowModel