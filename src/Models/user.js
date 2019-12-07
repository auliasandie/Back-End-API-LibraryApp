const db = require ('../Configs/db'); //<-sesuaikan dengan (variable).query

const userModel = {
    register: (body) => {
        console.log('body', body)
        const fullname = body.fullname;
        const username = body.username;
        const email = body.email;
        const password = body.password;
        const id_level = body.id_level;

        return new Promise ((resolve, reject) => {
            db.query('INSERT INTO user (fullname, username, email, password, id_level) VALUES (?,?,?,?,?)', [fullname, username, email, password, id_level], (err, results) => {
                if(!err){
                    resolve(results);
                } else { 
                    reject(new Error(err));
                }
            })       
         })
    },
    getUserByEmail: (email) => {
        return new Promise ((resolve, reject) => {
            db.query('SELECT * FROM user WHERE email=?' , email, (err, results) => {
                if(!err) {
                    resolve(results);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },
    
    getLastID : () => {
        return new Promise ((resolve, reject) => {
            db.query('SELECT MAX (id) FROM user', (err, results) => {
                if (!err){
                    resolve(results);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },

 login: (email, password) => {
     //console.log('masuk models')
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM user WHERE email=? AND password=?', [email, password], (err, results) => {
                if (!err){
                    console.log('data user',results)
                    resolve(results);
                } else {
                    reject(new Error(err));
                }
            })
        })
    }
}
 
module.exports = userModel




// module.exports = {
//     registerUser: body => {
//         return new Promise ((resolve, reject) => {
//             let query = db.query('INSERT INTO user SET ?',[body], (err, results) => {
//                 if (!err) {
//                     resolve(results); 
//                 } else {
//                     reject(err);
//                 }
//                 // console.log(results)
//             });

//         });
//     },

//     loginUser: (email, password) => {
//         return new Promise ((resolve, reject) => {
//             let query = db.query('SELECT * FROM user WHERE email=? AND password=?', [email, password], (err, results) => {
//                 if (!err) {
//                     resolve(results);
//                 } else {
//                     reject (err);
//                 }
//             }
//         )
//     })
//     }
// }