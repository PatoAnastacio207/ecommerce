const Product = require('../models/Product')

class ProductsController {
    static async getAllProducts (req, res, next) {
        try {
            const products = await Product.find()
            return res.json(products)
        } catch (err) {
            return next(err)
        }
    }
    static async getProductsArray (req, res, next) {
        try {
            const products = await Product.find({ _id: { $in: req.body.items }})
            return res.json(products)
        } catch (err) {
            return next(err)
        }
    }
    static async getProductById (req, res, next) {
        try {
            const product = await Product.findOne({ _id: req.params.id })
            return res.json(product)
        } catch {
            return next(err)
        }
    }
    static async createProduct (req, res, next) {
        try {
            const newProduct = new Product(req.body)
            await newProduct.save()
            return res.json(newProduct)
        } catch {
            return next(err)
        }
    }
    static async updateProduct (req, res, next) {
        try {
            await Product.updateOne({ _id: req.params.id }, req.body)
            const product = await Product.find({ _id: req.params.id })
            res.json(product)
        } catch {
            return next(err)
        }
    }
    static async deleteProduct (req, res, next) {
        console.log(req.params.id)
        try {
            await Product.deleteOne({ _id: req.params.id })
            return res.sendStatus(204)
        } catch {
            return next(err)
        }
    }
    static async getProductByCategoryName (req, res, next) {
        try {
            const products = await Product.find({ "category.name": req.params.name })
            return res.json(products)
        }
        catch {
            return next(err)
        }
    }
    static async getProductByCategoryType (req, res, next) {
        try {
            const products = await Product.find({ "category.name": req.params.name, "category.type": req.params.type })
            return res.json(products)
        }
        catch {
            return next(err)
        }
    }
    static async searchProducts (req, res, next) {
        try {
            console.log(req.params.name)
            const products = await Product.find({ name: { $regex: req.params.name, $options: 'ix' }})
            return res.json(products)
        }
        catch {
            return next(err)
        }
    }
    static async addProductReview (req, res, next) {
        try {
            await Product.findOneAndUpdate({ _id: req.body._id }, { $pull: { reviews: { orderId: req.body.orderId }}})
            const product = await Product.findOneAndUpdate(
                {_id: req.body._id},
                { $push: { reviews: {
                    valoration: req.body.review.valoration,
                    message: req.body.review.message,
                    authorName: `${req.body.user.firstName} ${req.body.user.lastName}`, 
                    orderId: req.body.orderId
                }}},
                {
                    returnOriginal: false,
                    useFindAndModify: false
                }
            )
            return res.send(product)
        } catch (err) {
            return next(err)
        }
    }
}

module.exports = ProductsController