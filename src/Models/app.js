const db = require ('../Configs/db'); //<-sesuaikan dengan (variable).query

module.exports = {
    getAllBooks: () => {
        return new Promise((resolve, reject) => {
            
          let sql = "SELECT *, b.genre, c.year as book_year,d.status as book_status FROM books a inner join book_genre b on a.id_genre = b.id_genre inner join book_year c on a.id_year=c.id_year inner join book_status d on a.id_status = d.id_status";
        //   let sql = "SELECT * from book" //, b.genre, c.year as book_year,d.status as book_status FROM books a inner join book_genre b on a.id_genre = b.id_genre inner join book_year c on a.id_year=c.id_year inner join book_status d on a.id_status = d.id_status";
          db.query(sql, (err, results) => {
            if (!err) {
              resolve(results);
            } else reject(err);
          });
        });
      }, 
    getAllBooksById: req => {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT * FROM books  WHERE id_book=' + req.params.id_book;
            db.query(sql, (err, results) => {
                if (!err) {
                    resolve(results);
                } else reject (err);
            });
        })
    },
    getAllGenre: () => {
        return new Promise((resolve, reject) => {
          let sql = "SELECT * FROM book_genre";
          db.query(sql, (err, results) => {
            if (!err) {
              resolve(results);
            } else reject(err);
          });
        });
      }, 
      getByGenre: req => {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT *, b.genre as book_genre, c.year as book_year,d.status as book_status FROM books a inner join book_genre b on a.id_genre = b.id_genre inner join book_year c on a.id_year=c.id_year inner join book_status d on a.id_status = d.id_status WHERE b.genre=' + "'" + req.params.genre + "'";
            db.query(sql, (err,results) => {
                if (!err) {
                    resolve(results);
                } else reject (err);
            });
        })
    },
    getGenreId: req => {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT *, b.genre as book_genre, c.year as book_year,d.status as book_status FROM books a inner join book_genre b on a.id_genre = b.id_genre inner join book_year c on a.id_year=c.id_year inner join book_status d on a.id_status = d.id_status WHERE a.id_genre=' + req.params.id_genre;
            db.query(sql, (err,results) => {
                if (!err) {
                    resolve(results);
                } else reject (err);
            });
        })
    },
    getAllYear: () => {
        return new Promise((resolve, reject) => {
        //   let sql = "SELECT *, b.genre, c.year as book_year,d.status as book_status FROM books a inner join book_genre b on a.id_genre = b.id_genre inner join book_year c on a.id_year=c.id_year inner join book_status d on a.id_status = d.id_status WHERE a.id_year=" + req.params.id_year;
            let sql = 'SELECT * FROM book_year';
          db.query(sql, (err, results) => {
            if (!err) {
              resolve(results);
            } else reject(err);
          });
        });
      }, 
      getByYearId: req => {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT *, b.genre as book_genre, c.year as book_year,d.status as book_status FROM books a inner join book_genre b on a.id_genre = b.id_genre inner join book_year c on a.id_year=c.id_year inner join book_status d on a.id_status = d.id_status WHERE a.id_year=' + req.params.id_year;
            db.query(sql, (err,results) => {
                if (!err) {
                    resolve(results);
                } else reject (err);
            });
        })
    },
    getByYear: req => {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT *, b.genre as book_genre, c.year as book_year,d.status as book_status FROM books a inner join book_genre b on a.id_genre = b.id_genre inner join book_year c on a.id_year=c.id_year inner join book_status d on a.id_status = d.id_status WHERE c.year=' + req.params.year;
            db.query(sql, (err,results) => {
                if (!err) {
                    resolve(results);
                } else reject (err);
            });
        })
    },
    getByStatus: req => {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT *, b.genre as book_genre, c.year as book_year,d.status as book_status FROM books a inner join book_genre b on a.id_genre = b.id_genre inner join book_year c on a.id_year=c.id_year inner join book_status d on a.id_status = d.id_status WHERE d.status=' + "'" + req.params.status + "'";
            db.query(sql, (err, results) => {
                if (!err) {
                    resolve(results);
                } else reject (err);
            })
        })
    },
    getByTitle: req => {
        return new Promise((resolve, reject) => {
            let sql = "SELECT * FROM books WHERE title='" + req.params.title + "'";
            db.query(sql, (err, results) => {
                if (!err) {
                    resolve(results); 
                } else reject (err);
            })
        })
    },
    getPopularBooks: () => {
        return new Promise((resolve, reject) => {
            
          let sql = "SELECT *, b.genre, c.year as book_year,d.status as book_status FROM books a inner join book_genre b on a.id_genre = b.id_genre inner join book_year c on a.id_year=c.id_year inner join book_status d on a.id_status = d.id_status limit 5";
        //   let sql = "SELECT * from book" //, b.genre, c.year as book_year,d.status as book_status FROM books a inner join book_genre b on a.id_genre = b.id_genre inner join book_year c on a.id_year=c.id_year inner join book_status d on a.id_status = d.id_status";
          db.query(sql, (err, results) => {
            if (!err) {
              resolve(results);
            } else reject(err);
          });
        });
      }, 
    
    postGenre: body => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO genre SET ?', [body],(err, results) => {
                if (!err) {
                    resolve(results);
                } else {reject(err);}
            });
        });
    }, 
    postBooks: body => {
        console.log(body)
        return new Promise((resolve, reject) => {

            let query = db.query("INSERT INTO books SET ?",[body],(err, results) => {
                if (!err) {
                    resolve(results);
                } else {
                    reject(err);
                }
             });
        });
    },
    putBookbyId: req => { 
        return new Promise((resolve, reject) => {
        let sql = "UPDATE books SET title='" +
            req.body.title +
            "', author='" +
            req.body.author +
            "',id_genre=" +
            req.body.id_genre +
            ",id_status=" +
            req.body.id_status +
            ",id_year=" +
            req.body.id_year +
            ",image_url='" +
            req.body.image_url +
            "',description='" +
            req.body.description +
            "' WHERE id_book=" + req.params.id_book + ""
        // console.log(sql)
        let query = db.query(sql, (err, results) => {
            if (!err) {
                resolve(results);
            }
            else {
                reject(err);
            }
          });
        })
    },
    deleteBooks: req => {
        return new Promise((resolve,reject)=>{
            let sql = "DELETE FROM books WHERE id_book="+req.params.id_book+" ";
            let query = db.query(sql,(err,results)=>{
                if (!err){
                    resolve(results);
                }else{
                    reject(err);
                }
            })
        })
    }
}