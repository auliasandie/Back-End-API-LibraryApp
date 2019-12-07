const userModel = require("../Models/user");
const formResponse = require('../Helpers/formResponse');
const jwt = require('jsonwebtoken');
const joi = require('@hapi/joi');
const crypto = require('crypto-js');
const secret = process.env.SECRET_KEY;
 
const formValidation = (data) => {
  const schema = joi.object(). keys({
    fullname: joi.string().min(4).required(),
    username: joi.string().min(4).required(),
    email: joi.string().email({ minDomainSegments : 2}).required(),
    password: joi.string().min(6).required(),
    id_level: joi.number().required() 
  })
  const results = schema.validate(data)

  if (results.error == undefined) return true
      else return false;
}

const hash = (string) => {
  return crypto.SHA256(string)
    .toString(crypto.enc.Hex);
}

const userController = {
  registerUser: (req, res) => {
    console.log('okeee',req.body.fullname)
    console.log('okeee',req.body.username)
    console.log('okeee',req.body.email)
    console.log('okeee',req.body.password)
    console.log('okeee',req.body.id_level)
    const body = {
      fullname: req.body.fullname,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      id_level: 2
      
    }

    const isValid = true //formValidation(body)
    if(!isValid){
      formResponse.success(res, 401, {error: 'Invalid Data!'});
    }
    if (isValid){
      body.password = hash(body.password);
      userModel
      .getUserByEmail (body.email)
      .then(results => {
        if(results.length === 0){
          userModel.register(body)
          .then(rsults => {
            console.log(rsults)
            userModel.getLastID()
            .then(id => {
              const data = {
                id: id[0]['MAX (id)'],
                fullname: req.body.fullname,
                username: req.body.username,
                email: req.body.email,
                id_level: req.body.id_level
              };
              
              formResponse.success(res, 200, rsults, data);
            })
            .catch(error => {res.json(error);
            });
          })
        } else {
          formResponse.success(res, 403, {error: 'Email is already registered!'})
        }
      })
      .catch(error => {res.json(error);
      }
      )};
  },

    registerAdmin: (req, res) => {
      console.log(req.body)
      const body = {
        fullname: req.body.fullname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        id_level: 1
      }

      if(!formValidation (body)){
        return formResponse.success(res, 401, {error: 'Invalid Data!'});
      }
      body.password = hash(body.password);

      userModel
      .getUserByEmail(body.email)
      .then(results => {
        if(results.length === 0){
          userModel.register(body)
          .then(rsults => {

            userModel.getLastID()
            .then(id => {
              const data = {
                id: id[0] ['MAX (id)'],
                fullname: req.body.fullname,
                username: req.body.username,
                email:req.body.email,
                id_level: 1
              };
              formResponse.success(res, 200, rsults, data);
            })
            .catch(error => {res.json(error);});
          })
        } else {
          formResponse.success(res, 403, {error: 'Email is already registered!'})
        }
      })
      .catch(error => {res.json(error);})
    },

  loginUser: (req, res) => {
    console.log('body',req.body)
    const email = req.body.email;
    const password = hash(req.body.password)
    console.log('login', email, '', password);
    userModel.login(email, password)
    .then(results => {
    
      if(results.length !==0) {
        const payload = { ...results[0], expiresIn: '1h'};

        jwt.sign(payload, secret, (err, token) => {
          if(err) {
            console.log(err)
          }
          // res.header("Access-Control-Allow-Origin", "*");
          res.setHeader('Authorization', `Bearer ${token}`);
          console.log('result hasil',results[0])
          // const data = {
          //   user : {
          //     id: result[0].id,
          //     username: results[0].username,
          //     email: results[0].email,
          //     id_level: results[0].id_level
          //   },
          //   token
          // }
          // console.log('{}',{})
          // console.log('data',data.user)
          // formResponse.success(res, 200, {}, data)
          return res.json({
            data : results,
            token
          })
          // return JSON.stringify({
          //   data : results[0],
          //   token
          })
        
        
      } else  {
        const data = {
          user: null,
          token: null
        }
        formResponse.success(res, 401, {error: 'Wrong email or password!'}, data)
      }
    })
    .catch(error => {res.json(error)})
  },
 
}
    
module.exports = userController;



// module.exports = {
//     registerUser: (req, res) => {
//     console.log(req.body)
//     // console.log(req) 
//     const body = { 
//       ...req.body
//     };
//     userModel
//     .registerUser(body)
//       .then(res =>
//         res.json({
//           status: 200,
//           results: body 
//         })
//       )
//       .catch(err => res.json(err));
//   },

//   loginUser: (req, res) => {

//   }
// }