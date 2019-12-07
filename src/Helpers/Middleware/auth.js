require('dotenv').config();
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_KEY;

const auth = {
    verifyToken: (req, res, next) => {
        const bearerHeader = req.headers['authorization'];
        if(bearerHeader !== undefined){
            const bearer = bearerHeader.split(' ');
            const token = bearer[1];
            
            try{
                const data = jwt.verify(token, secret);
                console.log('token', token)
                if(data){
                    req.id = data.id;
                    req.email = data.email;
                    req.username = data.username;
                    req.id_level = data.id_level;
                    next();
                }
            } catch (err) {
                console.log(err);
                res.sendStatus(403); 
            }        

        } else {
            console.error('no bearer', bearerHeader)
            res.sendStatus(403);
        }
    },

    verifyAdmin: (req, res, next) => {
        if(req.id_level === 1) { next() } else { res.sendStatus(403)}
    }
}

module.exports = auth;

// const jwt = require ('jsonwebtoken');

// const login = (req, res, next) => {
//   const token = jwt.sign (
//     {
//       username: 'user',
//       password: 'admin',
//       level: 5,
//       tier: 3,
//     },
//     'bootcamp',
//     {expiresIn: '1h', issuer: 'CEO'}
//   );
//   req.token = token;
//   console.log ('jwt sign', token);
//   next ();
// };

// const decode = (req, res, next) => {
//   const token = req.token;
//   const decode = jwt.decode (token);
//   console.log ('jwt decode', decode);
//   next ();
// };

// const verifyAdmin = (req, res, next) => {
//   const token = req.token;
//   //   const verify = jwt.verify (token, 'arkademyJogja', {issuer: 'CEO'});
//   //   console.log ('jwt verify', verify);
//   try {
//     jwt.verify (token, 'bootcamp', {issuer: 'CEO'});
//   } catch (error) {
//     req.error = error;
//   }
//   next ();
// };

// module.exports = {
//   login,
//   decode,
//   verifyAdmin,
// };


// const jwt = require("jsonwebtoken");

// const jwtSecret = process.env.JWTSECRET||"261011";
// module.exports = {
//     verifyJWTToken:(token) => {
//         return new Promise((resolve, reject) => {
//             jwt.verify(token, jwtSecret, (error, decodedToken) => {
//                 if (error || !decodedToken)
//                     return reject(error);
//                 resolve(decodedToken);
//             });
//         });
//     },
//     createJWTToken:(sessionData, expiredTime) => {
//         const maxValid = expiredTime||3600;
//         const token = jwt.sign({
//             data: sessionData
//         }, jwtSecret, {
//             expiresIn: maxValid,
//             algorithm: "HS256"
//         });
//         return token;
//     }
// }