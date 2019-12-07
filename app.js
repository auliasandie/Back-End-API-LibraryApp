require ('dotenv').config ();
const express = require ('express');
const logger = require ('morgan');
const bodyParser = require ('body-parser');
const router = require ('./src/Routes/index'); //jangan lupa ini
const app = express();
const helmet = require ('helmet');
const cors = require ('cors');

// parse application/json

const configurationOptions = {
  methods : ['GET', 'PUT', 'POST', 'DELETE'],
  origin: '*'
}
app.use(cors (configurationOptions));
app.use (helmet.xssFilter ());
app.use (logger ('dev'));


// app.use('/api', router)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use('/api', router)

// app.use('/', auth.login, router);

//Server listening
app.listen(9600, () => {
  console.log('Server started on port 9600...');
}); 



module.exports = app;

// var whitelist = ['*','http://localhost']
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }



// app(morgan(function (tokens, req, res) {
//   return [
//     tokens.method(req, res),
//     tokens.url(req, res),
//     tokens.status(req, res),
//     tokens.res(req, res, 'content-length'), '-',
//     tokens['response-time'](req, res), 'ms'
//   ].join(' ')
// })); 