const express = require("express");
const passport = require("passport");
const User = require("../models/User");
const router = express.Router();

router.post("/register", (req, res) => {
  User.create(req.body).then((user) => {
    res.status(201).send(user);
  });
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.send(req.user);
});

router.post("/logout", (req, res) => {
  req.logOut();
  res.sendStatus(200);
});

router.put("/:id", (req, res) => {
  User.update(req.body, {
    where: { id: req.params.id },
    returning: true,
    plain: true,
  })
    .then((result) => {
      const user = result[1];
      res.json({
        message: "Updated successfully",
        user,
      });
    })
    .catch((err) => {
      res.sendStatus(500);
    });
});

module.exports = router;
