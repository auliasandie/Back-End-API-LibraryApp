const booksmodel = require("../Models/app");

module.exports = {
  getAllBooks: (req, res) => {
    booksmodel
      .getAllBooks()
      .then(response => res.json(response))
      .catch(err => res.json(err));
  }, 
  getPopularBooks: (req, res) => {
    booksmodel
      .getPopularBooks()
      .then(response => res.json(response))
      .catch(err => res.json(err));
  }, 

  getAllBooksById: (req, res) => {
    booksmodel
      .getAllBooksById(req)
      .then(response => res.json(response))
      .catch(err => res.json(err));
  },
  getAllGenre: (req, res) => {
    booksmodel
      .getAllGenre(req)
      .then(response => res.json(response))
      .catch(err => res.json(err));
  },
  getGenreId: (req, res) => {
    booksmodel
      .getGenreId(req)
      .then(response => res.json(response))
      .catch(err => res.json(err));
  },
  getByGenre: (req, res) => {
    booksmodel
      .getByGenre(req)
      .then(response => res.json(response))
      .catch(err => res.json(err));
  },
  
  getByStatus: (req, res) => {
    booksmodel
      .getByStatus(req)
      .then(response => res.json(response))
      .catch(err => res.json(err));
  },
  getAllYear: (req, res) => {
    booksmodel
      .getAllYear(req)
      .then(response => res.json(response))
      .catch(err => res.json(err));
},
getByYearId: (req, res) => {
  booksmodel
    .getByYearId(req)
    .then(response => res.json(response))
    .catch(err => res.json(err));
}, 
getByYear: (req, res) => {
  booksmodel
    .getByYear(req)
    .then(response => res.json(response))
    .catch(err => res.json(err));
}, 
getByTitle: (req, res) => {
  booksmodel
    .getByTitle(req)
    .then(response => res.json(response))
    .catch(err => res.json(err));
}, 
  postGenre: (req, res) => {
    const body = {
      ...req.body
    };   
    booksmodel
      .postGenre(body)
      .then(response =>
        res.json({
          status: 200,
          result: body
        })
      )
      .catch(err => res.json(err));
  },
  
  postBooks: (req, res) => {
    const body = {
      ...req.body
    };
    booksmodel
      .postBooks(body)
      .then(res =>
        res.json({
          status: 200,
          results: body
        })
      )
      .catch(err => res.json(err));
  },
  putBookbyId: (req, res) => {
    const body = {
      ...req.body
    };
    //const id = req.params.id_book
    booksmodel
      .putBookbyId(req)
      .then(response => res.json({
          results: body
      }))
      .catch(err => res.json(err));
  },
  deleteBooks: (req, res) => {
    booksmodel
      .deleteBooks(req)
      .then(response =>
        res.json({
          message: "Delete Success"
        })
      )
      .catch(err => res.json(err));
  }
};


