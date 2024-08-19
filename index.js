import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./Models/bookModel.js";
import booksRoute from "./routes/booksRoute.js"
import cors from 'cors'

const app = express();
// middelware for parsing request body
app.use(express.json());
app.use(cors());


app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to MERN stack tutorial");
});

app.use('/books', booksRoute );

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
