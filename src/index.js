import "dotenv/config";
import express from "express";
import uuidv4 from "uuid/v4";
import bodyParser from "body-parser";
import models from "./models";
import routes from "./routes";

console.log("Hello Node.js project.");
console.log(process.env.MY_SECRET);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/session", routes.session);
app.use("/users", routes.user);
app.use("/messages", routes.message);

app.use((req, res, next) => {
  req.context = {
    models,
    me: models.users[1]
  };
  next();
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
