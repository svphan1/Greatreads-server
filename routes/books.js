const express = require('express')
const router = express.Router()
const knex = require('../db/connection')

router.get('/books', (req, res) => {
  knex('book')
    .orderBy('book.id', 'asc')
    .then(books => {
      res.json({ books: books })
    })
})