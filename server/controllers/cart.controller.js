const Product = require("../models/Product")

class CartController {
    static async getCart (req, res, next) {
        let cart = {items: [], total: 0}
        if (req.session.cart) {
            const ids = req.session.cart.map(item => item._id)
            let products = await Product.find({ _id: { $in: ids }}).lean().exec()
            cart.items = products.map((product, index) => {
                product.quantity = req.session.cart[index].quantity
                return product
            })
            cart.total = cart.items.reduce((previo, current) => {
                return previo ? current.price + previo : current.price * current.quantity
              }, 0)
        }
        return res.send(cart)
    }
    static addItem (req, res, next) {
        if (!req.body._id) return res.sendStatus(500)
        const product = { _id: req.body._id, quantity: req.body.quantity ? req.body.quantity : 1 }
        if (req.session.cart) {
            // Checkear si existe y añadir la quanti q se añada
            if (req.session.cart.some(e => e._id === product._id)) {
                console.log("-----------------------")
                req.session.cart = req.session.cart.map((item, index) => {
                    item.quantity += item._id === product._id ? product.quantity : 0
                    console.log(product)
                    return item
                })
            }
            else req.session.cart.push(product)
        }
        else req.session.cart = [product]
        return res.sendStatus(200)
    }
    static deleteItem (req, res, next) {
        if (req.session.cart) req.session.cart = req.session.cart.filter(item => item._id != req.body._id)
        return res.sendStatus(204)
    }
    static editItem (req, res, next) {
        if (req.session.cart) req.session.cart = req.session.cart.map(item => {
            if (item._id === req.body._id) return { quantity: req.body.quantity, _id: item._id }
            return { item }
        })
        res.sendStatus(201)
    }
}

module.exports = CartController