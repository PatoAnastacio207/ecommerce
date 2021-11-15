const express = require("express");
const passport = require("passport");
const router = express.Router();
const UsersController = require("../controllers/users.controller")
const { adminAuthoritation } = require('../middleware/auth')

router.put("/:id", UsersController.editUser)
router.put("/admin/:id", adminAuthoritation, UsersController.switchAdmin)
router.delete("/admin/:id", adminAuthoritation, UsersController.deleteUser)
router.get("/admin", adminAuthoritation, UsersController.getAllUsers)

module.exports = router;
