const express = require("express");
const router = express.Router();
const CartController = require("../controllers/cart.controller")

// Devuelve array de objetos con el _id y la cantidad del producto
router.get('/', CartController.getCart)
// Añadir objeto al array de cart
router.post('/add', CartController.addItem)
// Eliminar objeto del cart por medio del _id
router.delete('/remove', CartController.deleteItem)
// Edita la cantidad de un producto
router.put('/edit', CartController.editItem)

module.exports = router;