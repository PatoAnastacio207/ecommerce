const express = require("express");
const passport = require("passport");
const router = express.Router();
const UsersController = require("../controllers/users.controller")

// Registra un usuario. recibe en el body los datos
router.post("/register", UsersController.register)
// Logea un usuario usando su email y contraseña
router.post("/login", passport.authenticate("local"), UsersController.login)
// Desloguea del lado del backend al usuario
router.post("/logout", UsersController.logout)
// Devuelve el usuario logeado
router.get("/logged", UsersController.getLogged)

module.exports = router;