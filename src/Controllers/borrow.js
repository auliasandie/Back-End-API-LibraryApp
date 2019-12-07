const borrowModel = require('../Models/borrow');
const formResponse = require('../Helpers/formResponse');

const borrowController = {
    getBorrow: (req, res) => {
        //console.log(req.body)
        const id_book = req.query.id_book; 

        borrowModel
        .getBorrow(id_book) 
        .then(result => {
            formResponse.success(res, 200, result);
        })
        .catch(error => {
            res.json(error);
        })
    },

    addBorrow: (req, res) => {
        //console.log(req.body)
        const email =req.body.email;
        const id_book = req.body.id_book;

        borrowModel
        .addBorrow(email, id_book)
        .then(result => {
            formResponse.success(res, 200, result);
        })
        .catch(error => {
            res.json(error);
        })
    },

    updateBorrow: (req, res) => {
        console.log(req.body)
        const id_borrow = req.body.id_borrow; 
        const tanggal = '12/12/2019';

        borrowModel
        .updateBorrow(id_borrow, tanggal)
        .then(result => {
            formResponse.success(res, 200, result);
        })
        .catch(error => {
            res.json(error);
        })
    }


  
}

module.exports = borrowController