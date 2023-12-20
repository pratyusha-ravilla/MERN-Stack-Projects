// we need to import express router
import express from 'express';
// importing book now
import { Book } from '../models/bookModel.js';

const router = express.Router(); //we are creating a router variable here, so that we can use router instead of app now


//Route for save a new Book or a new book
//creating callback fun with async
router.post("/", async (request, response) => {
  try {
    //need to validate here using if
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        message: "send all required fields: title, author, publishYear",
      });
    }
    //creating a newBook here
    const newBook = {
      title: request.body.title,
      author: request.body.author,
      publishYear: request.body.publishYear,
    };

    //calling new book
    const book = await Book.create(newBook);

    //creating status code t send book to the client
    return response.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Route for get all Books from database
router.get("/", async (request, response) => {
  try {
    //to get all books data
    const books = await Book.find({});
    // response from server
    return response.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Route for get one Book from database by id
router.get("/:id", async (request, response) => {
  try {
    // to search id in database
    const { id } = request.params;
    //to get book data by id
    const book = await Book.findById(id);
    // response from server
    return response.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Route for update a Book
router.put("/:id", async (request, response) => {
  try {
    //need to validate here using if
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        message: "send all required fields:title, author, publishYear",
      });
    } // to search by id in database
    const { id } = request.params;
    //to get book data by id and by update
    const result = await Book.findByIdAndUpdate(id, request.body);
    // if the result is false it will return if block
    if (!result) {
      return response.status(404).json({ message: "Book not found" });
    }
    // else
    return response.status(200).send({ message: "Book updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Route for Deleting a Book
router.delete("/:id", async (request, response) => {
  try {
    // to get book by id in database
    const { id } = request.params;
    // to get book data by id and delete
    const result = await Book.findByIdAndDelete(id);
    if (!result) {
      return response.status(404).json({ message: "Book not found" });
    } //else
    return response.status(200).send({ message: "Book deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
