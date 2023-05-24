import { NextFunction, Request, Response } from "express";
import {
	createNewBook,
	getBooksByGenre,
	getBooksByGenreAndPublisher,
	getBooksFromDb,
	getFeaturedBooksFromDb,
	updatingBookPrice,
} from "./book.service";

// Get books
export const getBooks = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const books = await getBooksFromDb(req.query);

	res.status(200).json({
		status: "success",
		books,
	});
};

// Create Book
export const createBook = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const data = req.body;

	try {
		const book = await createNewBook(data);

		res.status(200).json({
			status: "success",
			book,
		});
	} catch (error) {
		res.status(400).json({
			status: "error",
			msg: "Something is wrong",
			error: error,
		});
	}
};

//Get Books by genre
export const getSpecificGenreBooks = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { genre } = req.params;
	const books = await getBooksByGenre(genre);

	res.status(200).json({
		status: "success",
		books,
	});
};

//Get books by genre and publisher name
export const getSpecificGenreAndPublisherBooks = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { genre, publisher_name } = req.params;
	const books = await getBooksByGenreAndPublisher({
		genre,
		publisher_name,
	});

	res.status(200).json({
		status: "success",
		books,
	});
};

//Update book price to int
export const updatingBookPriceToInt = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const result = await updatingBookPrice();

		res.status(200).json({
			status: "success",
			result,
		});
	} catch (error) {
		res.status(400).json({
			status: "error",
			msg: "Something is wrong",
			error: error,
		});
	}
};

//Get featured books
export const getFeaturedBooks = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { genre } = req.params;
	const featured_books = await getFeaturedBooksFromDb();

	res.status(200).json({
		status: "success",
		featured_books,
	});
};

