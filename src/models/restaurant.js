const mongoose = require("mongoose");

// var ToySchema = new Schema({ name: String });
// var ToyBoxSchema = new Schema({
//   toys: [ToySchema],
//   buffers: [Buffer],
//   strings: [String],
//   numbers: [Number]
//   // ... etc
// });

const categoriesSchema = new mongoose.Schema({
  title: String,
  items: [String]
});

const restaurantSchema = new mongoose.Schema({
  name: String,
  categories: [categoriesSchema],
  daysOpen: [String]
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = mongoose.model("Restaurant", restaurantSchema);
