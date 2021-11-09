const express = require("express");
const passport = require("passport");
const router = express.Router();
const UsersController = require("../controllers/users.controller")
const { adminAuthoritation } = require('../middleware/auth')

router.post("/register", UsersController.register)
router.post("/login", passport.authenticate("local"), UsersController.login)
router.post("/logout", UsersController.logout)
router.get("/logged", UsersController.getLogged)
router.put("/:id", UsersController.editUser)
router.put("/admin/:id", adminAuthoritation, UsersController.createAdmin)
router.delete("/admin/:id", adminAuthoritation, UsersController.deleteUser)
router.get("/admin", adminAuthoritation, UsersController.getAllUsers)

module.exports = router;
