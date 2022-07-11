const Book = require("../models/Book.model");

const router = require("express").Router();

router.get("/books", (req, res, next) => {
  Book.find()
    .then((booksFromDB) => {
      console.log("Query to DB worked...", booksFromDB.length);
    })
    .catch((error) => {
      console.log("Error getting data from DB", error);
    });

  res.send("display list of books");
});

module.exports = router;
