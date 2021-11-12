class CartController {
    static getCart (req, res, next) {
        res.send(req.session.cart)
    }
    static addItem (req, res, next) {
        if (!req.body._id) return res.sendStatus(500)
        const product = { _id: req.body._id, quantity: req.body.quantity ? req.body.quantity : 1 }
        if (req.session.cart) req.session.cart.push(product)
        else req.session.cart = [product]
        res.sendStatus(200)
    }
    static deleteItem (req, res, next) {
        if (req.session.cart) req.session.cart = req.session.cart.filter(item => item._id != req.body._id)
        res.sendStatus(204)
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