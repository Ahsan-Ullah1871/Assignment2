import { IBook, IFeaturedBook } from "./book.interface";
import Book from "./book.model";

//create new book
export const createNewBook = async (payload: IBook): Promise<IBook> => {
	const book = new Book(payload);

	await book.save();

	return book;
};

//create new book
export const updatingBookPrice = async (): Promise<{
	success: boolean;
	message: string;
}> => {
	await Book.updateMany({ publicationYear: { $gt: 2020 } }, [
		{
			$set: {
				price: { $toInt: "$price" },
			},
		},
	]);

	return {
		success: true,
		message: "All price updated successfully to int",
	};
};

// Get all books also supported query params]
export const getBooksFromDb = async (
	payload: object | null
): Promise<IBook[]> => {
	const books = await Book.find({ ...payload });

	return books;
};

// Get books by specific genre
export const getBooksByGenre = async (payload: string): Promise<IBook[]> => {
	const books = await Book.find({ genre: payload });

	return books;
};

// Get books by specific genre
export const getBooksByGenreAndPublisher = async (payload: {
	genre: string;
	publisher_name: string;
}): Promise<IBook[]> => {
	const books = await Book.find({
		genre: payload.genre,
		"publisher.name": payload.publisher_name,
	});

	return books;
};

// Get all feature books
export const getFeaturedBooksFromDb = async (): Promise<IFeaturedBook[]> => {
	const featured_books = await Book.aggregate([
		{
			$match: {
				rating: { $gte: 4 },
			},
		},
		{
			$addFields: {
				featured: {
					$cond: [
						{ $gte: ["$rating", 4.5] },
						"BestSeller",
						"Popular",
					],
				},
			},
		},
	]);

	return featured_books;
};

