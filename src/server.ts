// getting-started.js
import mongoose from "mongoose";
import app from "./app";

const port: number = 5000;

// Database connection
main().catch((err) => console.log(err));

async function main() {
	await mongoose.connect("mongodb://127.0.0.1:27017/books");

	try {
		console.log("====================================");
		console.log("Database connected");
		console.log("====================================");
		app.listen(port, () => {
			console.log(`Example app listening on port ${port}`);
		});
	} catch (error) {
		console.log("====================================");
		console.log(error);
		console.log("====================================");
	}
}

