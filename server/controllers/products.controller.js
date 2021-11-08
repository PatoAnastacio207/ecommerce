const { Product } = require('../models')

class ProductsController {
    static async getAllProducts (req, res, next) {
        try {
            const products = await Product.findAll()
            res.json(products)
        } catch {
            res.sendStatus(500)
        }
    }
    static async getProductById (req, res, next) {
        try {
            const product = await Product.findByPk(req.params.id)
            res.json(product)
        } catch {
            res.sendStatus(500)
        }
    }
    static async createProduct (req, res, next) {
        try {
            await Product.create(req.body)
            res.json(req.body)
        } catch {
            res.sendStatus(500)
        }
    }
    static async updateProduct (req, res, next) {
        try {
            const [rows, affected] = await Product.update(req.body, { where: { id: req.params.id }, returning: true})
            res.json(affected[0])
        } catch {
            res.sendStatus(500)
        }
    }
    static async deleteProduct (req, res, next) {
        try {
            await Product.destroy({ where: { id: req.params.id } })
            res.sendStatus(204)
        } catch {
            res.sendStatus(500)
        }
    }
}

module.exports = ProductsController