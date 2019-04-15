// require("dotenv").config({ path: __dirname + "/.env" });
require("dotenv").config({ path: ".env" });
const fs = require("fs");

const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises

// import all of our models - they need to be imported only once
const Restaurant = require("./models/Restaurant");
``;

const restaurants = JSON.parse(
  fs.readFileSync(__dirname + "/restaurants.json", "utf-8")
);

async function deleteData() {
  console.log("😢😢 Goodbye Data...");
  await Restaurant.remove();
  console.log(
    "Data Deleted. To load sample data, run\n\n\t npm run sample\n\n"
  );
  process.exit();
}

async function loadData() {
  try {
    console.log(restaurants.restaurants);
    await Restaurant.insertMany(restaurants.restaurants);
    console.log("👍👍👍👍👍👍👍👍 Done!");
    process.exit();
  } catch (e) {
    console.log(
      "\n👎👎👎👎👎👎👎👎 Error! The Error info is below but if you are importing sample data make sure to drop the existing database first with.\n\n\t npm run blowitallaway\n\n\n"
    );
    console.log(e);
    process.exit();
  }
}
if (process.argv.includes("--delete")) {
  deleteData();
} else {
  loadData();
}
