const Product = require('../models/Product')

class ProductsController {
    static async getAllProducts (req, res, next) {
        try {
            const products = await Product.find()
            res.json(products)
        } catch (err) {
            res.sendStatus(500)
        }
    }
    static async getProductsArray (req, res, next) {
        try {
            const products = await Product.find({ _id: { $in: req.body }})
            res.json(products)
        } catch (err) {
            res.sendStatus(500)
        }
    }
    static async getProductById (req, res, next) {
        try {
            const product = await Product.findOne({ _id: req.params.id })
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
    static async getProductByCategoryName (req, res, next) {
        try {
            const products = await Product.find({ "category.name": req.params.name })
            res.json(products)
        }
        catch {
            res.sendStatus(500)
        }
    }
    static async getProductByCategoryType (req, res, next) {
        try {
            const products = await Product.find({ "category.name": req.params.name, "category.type": req.params.type })
            res.json(products)
        }
        catch {
            res.sendStatus(500)
        }
    }
    static async searchProducts (req, res, next) {
        try {
            const products = await Product.find({ "name": { $regex: req.params.name }})
            res.json(products)
        }
        catch {
            res.sendStatus(500)
        }
    }
    static async addProductReview (req, res, next) {
        try {
            const product = await Product.findOne({ _id: req.body._id })
            product.addReview(req.body)
        } catch {
            next()
        }
    }
}

module.exports = ProductsController