import mongoose from "mongoose";

import User from "./user";
import Message from "./message";
import Book from "./book";

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL);
};

const models = { User, Message, Book };

export { connectDb };

export default models;
