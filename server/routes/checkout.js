const express = require("express");
const OrdersController = require("../controllers/orders.controller")
const { adminAuthoritation } = require('../middleware/auth')
const router = express.Router();

// req recibe el carrito y el user
router.post('/buycart', OrdersController.addOrder)
// Devolver todas las ordenes de un usuario (checkear que sea el logeado)
router.get('/myorders', OrdersController.getUserOrders)
// Devolver todas las ordenes (admin)
router.get('/', adminAuthoritation, OrdersController.getOrders)
// Modificar el estado de una orden
router.put('/update/:id', adminAuthoritation, OrdersController.updateStatus)

module.exports = router;
