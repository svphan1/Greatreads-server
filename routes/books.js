const express = require('express');
const router = express.Router();
const knex = require('../db/connection');

router.get('/', (req, res) => {
  knex('books')
    .orderBy('books.id', 'asc')
    .then(books => {
      res.json({ books: books })
    })
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id
  knex('books')
    .where('id', id)
    .then(books => {
      res.json({ books: books[0] })
    })
})

router.post('/', (req, res, next) => {
  const body = req.body
  knex('books')
    .insert(body)
    .returning('*')
    .then(books => {
      res.json({ books: books[0] })
    })
})

router.put('/:id', (req, res) => {
  const id = req.params.id
  const body = req.body

  knex('books')
    .where('id', id)
    .update(body)
    .returning('*')
    .then(updatedBook => {
      res.json({ books: updatedBook[0] })
    })
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  knex('books')
    .where('id', id)
    .delete()
    .returning('*')
    .then(deletedBook => {
      res.json({ books: deletedBook[0] })
    })
})

module.exports = router;