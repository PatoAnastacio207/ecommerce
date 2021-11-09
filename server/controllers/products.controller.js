const { Product } = require('../models')

class ProductsController {
    static async getAllProducts (req, res, next) {
        try {
            const products = await Product.find()
            res.json(products)
        } catch (err) {
            res.sendStatus(500)
        }
    }
    static async getProductById (req, res, next) {
        try {
            const product = await Product.find({ _id: req.params.id })
            res.json(product)
        } catch {
            res.sendStatus(500)
        }
    }
    static async createProduct (req, res, next) {
        try {
            const newProduct = new Product(req.body)
            await newProduct.save()
            res.json(newProduct)
        } catch {
            res.sendStatus(500)
        }
    }
    static async updateProduct (req, res, next) {
        try {
            await Product.updateOne({ _id: req.params.id }, req.body)
            const product = await Product.find({ _id: req.params.id })
            res.json(product)
        } catch {
            res.sendStatus(500)
        }
    }
    static async deleteProduct (req, res, next) {
        try {
            await Product.deleteOne({ _id: req.params.id })
            res.sendStatus(204)
        } catch {
            res.sendStatus(500)
        }
    }
}

module.exports = ProductsController