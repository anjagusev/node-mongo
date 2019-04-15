const mongoose = require("mongoose");
//mongoose.Promise = global.Promise;

const bookSchema = new mongoose.Schema({
  id: String,
  title: {
    type: String,
    trim: true,
    required: "Please enter a book title!"
  },
  author: {
    type: String,
    trim: true,
    required: "Please enter a book author!"
  },
  url: {
    type: String,
    trim: true,
    required: "Please enter a book url!"
  },
  desc: {
    type: String,
    trim: true
  },
  image: String,
  origimage: String,
  cloudinary: String,
  gender: String,
  pubDate: Number
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
