import express from "express";
import {
	createBook,
	getBooks,
	getFeaturedBooks,
	getSpecificGenreAndPublisherBooks,
	getSpecificGenreBooks,
	updatingBookPriceToInt,
} from "./book.controller";
const router = express.Router();

// Default route (this also supported query params)
router.get("/", getBooks);

// Questing 4 (Featured book route)
router.get("/featured-books", getFeaturedBooks);

// Question 1 (create new book route)
router.post("/create-book", createBook);

//Question 5 (Update book price base on a condition )
router.patch("/update-book-price", updatingBookPriceToInt);

// Question 2 get books by genre
router.get("/:genre", getSpecificGenreBooks);

//Question 3 get book by genre and publisher name
router.get("/:genre/:publisher_name", getSpecificGenreAndPublisherBooks);

export default router;

//Note:
