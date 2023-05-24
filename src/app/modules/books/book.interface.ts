import { Types } from "mongoose";

// Review Interface
export interface IReview {
	user: string;
	comment: string;
}

// Book Interface
export interface IBook {
	title: string;
	author: Types.Array<string>;
	genre: string;
	publicationYear: number;
	publisher: { name: string; location: string };
	reviews: Types.DocumentArray<IReview>;
	rating: number;
	price: number;
}

// Featured Book Interface
export interface IFeaturedBook {
	title: string;
	author: Types.Array<string>;
	genre: string;
	publicationYear: number;
	publisher: { name: string; location: string };
	reviews: Types.DocumentArray<IReview>;
	rating: number;
	price: number;
	featured: "BestSeller" | "Popular";
}

