const express = require("express");
const router = express.Router();

router.use(logger);

router.get("/", (req, res) => {
  console.log(req.query.name);
  res.send("User List");
});

router.get("/new", (req, res) => {
  res.render("users/new");
});

router.post("/", (req, res) => {
  const isValid = true;
  if (isValid) {
    users.push({ firstName: "Sergiu" });
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log("Error");
    res.render("users/new", { firstName: req.body.firstName });
  }
  console.log(req.body.firstName);
  res.send("HI");
});

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    req.params.id;
    res.send(`User Get With ID ${req.params.id}`);
  })
  .put((req, res) => {
    req.params.id;
    res.send(`Update User Get With ID ${req.params.id}`);
  })
  .delete((req, res) => {
    req.params.id;
    res.send(`Delete User Get With ID ${req.params.id}`);
  });

const users = [{ name: "Sergiu" }, { name: "Ovi" }];
router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

module.exports = router;
