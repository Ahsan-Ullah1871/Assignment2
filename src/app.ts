import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";
import bookRoutes from "./app/modules/books/book.routes";

const app: Application = express();
app.use(cors());

//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//
// app.get("/", );
app.use("/api/v1/books", bookRoutes);

export default app;

