const express = require("express");
const router = require("./routes/users");
const app = express();

app.set("view engine", "ejs");

app.get("/", logger, (req, res) => {
  console.log("here");
  res.render("index", { text: "World" });
});

app.get("/users", (req, res) => {
  res.send("User List");
});

app.get("/users/new", (req, res) => {
  res.send("Users New Form");
});

const userRouter = require("./routes/users");

app.use("/users", userRouter);

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

app.listen(7000);
