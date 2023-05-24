import { Model, Schema, model } from "mongoose";
import { IBook } from "./book.interface";

//   Schema corresponding to the document interface.

const reviewSchema = new Schema({
	user: { type: String, required: true },
	comment: { type: String, required: true },
});

const bookSchema = new Schema<IBook>({
	title: { type: String, required: true },
	author: { type: [String], required: true },
	genre: { type: String, required: true },
	publicationYear: { type: Number, required: true },
	publisher: {
		name: { type: String, required: true },
		location: { type: String, required: true },
	},
	reviews: { type: [reviewSchema], default: undefined, required: true },
	rating: { type: Number, required: true },
	price: { type: Number, required: true },
});

//Model.
const Book = model<IBook>("Book", bookSchema);

export default Book;

