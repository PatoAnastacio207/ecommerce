const express = require("express");
const passport = require("passport");
const router = express.Router();
const UsersController = require("../controllers/users.controller")
const { adminAuthoritation, adminOrUser } = require('../middleware/auth')

// Devuelve el usuario por id
router.get("/single/:id", adminOrUser, UsersController.getSingleUser)
// Devuelve el usuario logeado por id (solo el admin o el mismo usuario pueden modificar estos datos)
router.put("/single/:id", adminOrUser, UsersController.editUser)
// Transforma un usuario en admin
router.put("/admin/:id", adminAuthoritation, UsersController.switchAdmin)
// Elimina un usuario
router.delete("/admin/:id", adminAuthoritation, UsersController.deleteUser)
// Devuelve todos los usuarios
router.get("/admin", adminAuthoritation, UsersController.getAllUsers)
// Añade item a la lista de favoritos
router.post("/favorites/add/:id", adminOrUser, UsersController.addFavorite)
// Elimina item de la lista de favoritos
router.delete("/favorites/remove/:id", adminOrUser, UsersController.removeFavorite)
// Devuelve la lista de ids de los favoritos
router.get("/favorites", adminOrUser, UsersController.getFavorites)


module.exports = router;
