const express = require('express');
const router = express.Router();
const knex = require('../db/connection');

router.get('/all', (req, res, next) => {
  knex('books')
    .select('*')
    .innerJoin('book_author', 'books.id', 'book_author.books_id')
    .innerJoin('authors', 'authors.id', 'book_author.authors.id')
    .orderBy('books.id', 'asc')
    .then(book_author => 
      res.json({ book_author: book_author }))
})

module.exports = router