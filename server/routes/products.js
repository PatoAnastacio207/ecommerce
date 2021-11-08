const express = require('express')
const ProductsController = require('../controllers/products.controller')
const router = express.Router()

// Ruta que devuelva todos los productos
router.get('/', ProductsController.getAllProducts)
// Ruta que devuelva un producto específico (id)
router.get('/id/:id', ProductsController.getProductById)
// Ruta para agregar un producto
router.post('/', ProductsController.createProduct)
// Ruta para modificar un producto (id)
router.put('/id/:id', ProductsController.updateProduct)
// Ruta para eliminar un producto (id)
router.delete('/id/:id', ProductsController.deleteProduct)

module.exports = router