const express = require('express')
const ProductsController = require('../controllers/products.controller')
const { adminAuthoritation } = require('../middleware/auth')
const { userBoughtProduct } = require('../middleware/reviewMiddle')
const router = express.Router()

// Devuelve todos los productos
router.get('/', ProductsController.getAllProducts)
// Devuelve un array de productos por id
router.post('/array', ProductsController.getProductsArray)
// Devuelve un array de productos que coinciden con la busqueda
router.get('/search/:name', ProductsController.searchProducts)
// Get por categoria
router.get('/category/:name', ProductsController.getProductByCategoryName)
// Get por categoria y tipo
router.get('/category/:name/:type', ProductsController.getProductByCategoryName)
// Devuelve un producto específico (id)
router.get('/id/:id', ProductsController.getProductById)
// Añadir review (body: { user, review: { valoration, message } })
router.post('/reviews/add', userBoughtProduct, ProductsController.addProductReview)
// Agregar un producto
router.post('/', adminAuthoritation, ProductsController.createProduct)
// Modificar un producto (id)
router.put('/id/:id', adminAuthoritation, ProductsController.updateProduct)
// Eliminar un producto (id)
router.delete('/id/:id', adminAuthoritation, ProductsController.deleteProduct)

module.exports = router