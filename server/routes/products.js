const express = require('express')
const ProductsController = require('../controllers/products.controller')
const { adminAuthoritation } = require('../middleware/auth')
const router = express.Router()

// Devuelve todos los productos
router.get('/', ProductsController.getAllProducts)
// Devuelve un producto específico (id)
router.get('/id/:id', ProductsController.getProductById)
// Agregar un producto
router.post('/', adminAuthoritation, ProductsController.createProduct)
// Modificar un producto (id)
router.put('/id/:id', adminAuthoritation, ProductsController.updateProduct)
// Eliminar un producto (id)
router.delete('/id/:id', adminAuthoritation, ProductsController.deleteProduct)

module.exports = router