const express = require("express");
const passport = require("passport");
const router = express.Router();
const UsersController = require("../controllers/users.controller")
const { adminAuthoritation, adminOrUser } = require('../middleware/auth')

// Devuelve el usuario logeado por id (solo el admin o el mismo usuario pueden modificar estos datos)
router.put("/:id", adminOrUser, UsersController.editUser)
// Transforma un usuario en admin
router.put("/admin/:id", adminAuthoritation, UsersController.switchAdmin)
// Elimina un usuario
router.delete("/admin/:id", adminAuthoritation, UsersController.deleteUser)
// Devuelve todos los usuarios
router.get("/admin", adminAuthoritation, UsersController.getAllUsers)

module.exports = router;
