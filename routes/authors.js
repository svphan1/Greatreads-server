const express = require("express");
const router = express.Router();
const knex = require("../db/connection");

router.get("/", (req, res) => {
  knex("authors")
    .orderBy("authors.id", "asc")
    .then(authors => {
      res.json({ authors: authors });
    });
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  knex("authors")
    .where("id", id)
    .then(authors => {
      res.json({ authors: authors[0] });
    });
});

router.post("/", (req, res, next) => {
  const body = req.body;
  knex("authors")
    .insert(body)
    .returning("*")
    .then(authors => {
      res.json({ authors: authors[0] });
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  knex("authors")
    .where("id", id)
    .update(body)
    .returning("*")
    .then(updatedAuthor => {
      res.json({ author: updatedAuthor[0] });
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  knex("authors")
    .where("id", id)
    .delete()
    .returning("*")
    .then(deletedAuthor => {
      res.json({ author: deletedAuthor[0] });
    });
});

module.exports = router;
