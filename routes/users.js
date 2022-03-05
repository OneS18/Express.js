const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("User List");
});

router.get("/new", (req, res) => {
  res.send("Users New Form");
});

router.post("/", (req, res) => {
  res.send("Create User");
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

module.exports = router;
