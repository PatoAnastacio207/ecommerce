const Product = require('../models/Product')

class ProductsController {
    static async getAllProducts (req, res, next) {
        try {
            const products = await Product.find()
            return res.json(products)
        } catch (err) {
            return res.sendStatus(500)
        }
    }
    static async getProductsArray (req, res, next) {
        console.log("get products array", req.body)
        try {
            const products = await Product.find({ _id: { $in: req.body.items }})
            return res.json(products)
        } catch (err) {
            return res.sendStatus(500)
        }
    }
    static async getProductById (req, res, next) {
        try {
            const product = await Product.findOne({ _id: req.params.id })
            return res.json(product)
        } catch {
            return res.sendStatus(500)
        }
    }
    static async createProduct (req, res, next) {
        try {
            const newProduct = new Product(req.body)
            await newProduct.save()
            return res.json(newProduct)
        } catch {
            return res.sendStatus(500)
        }
    }
    static async updateProduct (req, res, next) {
        try {
            await Product.updateOne({ _id: req.params.id }, req.body)
            const product = await Product.find({ _id: req.params.id })
            res.json(product)
        } catch {
            return res.sendStatus(500)
        }
    }
    static async deleteProduct (req, res, next) {
        console.log(req.params.id)
        try {
            await Product.deleteOne({ _id: req.params.id })
            return res.sendStatus(204)
        } catch {
            return res.sendStatus(500)
        }
    }
    static async getProductByCategoryName (req, res, next) {
        try {
            const products = await Product.find({ "category.name": req.params.name })
            return res.json(products)
        }
        catch {
            return res.sendStatus(500)
        }
    }
    static async getProductByCategoryType (req, res, next) {
        try {
            const products = await Product.find({ "category.name": req.params.name, "category.type": req.params.type })
            return res.json(products)
        }
        catch {
            return res.sendStatus(500)
        }
    }
    static async searchProducts (req, res, next) {
        try {
            console.log(req.params.name)
            const products = await Product.find({ name: { $regex: req.params.name, $options: 'ix' }})
            return res.json(products)
        }
        catch {
            return res.sendStatus(500)
        }
    }
    static async addProductReview (req, res, next) {
        try {
            const product = await Product.findOne({ _id: req.body._id })
            product.addReview(req.body)
            return res.send(product)
        } catch {
            return res.sendStatus(500)
        }
    }
}

module.exports = ProductsController