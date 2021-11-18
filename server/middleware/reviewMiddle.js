const Order = require('../models/Order')

const userBoughtProduct = async (req, res, next) => {
    try {
        // Get las orders del usuario
        const order = await Order.findOne({ _id: req.body.orderId })
        // Checkear si la orden es propia
        if (!order.userId == req.user._id) return res.send(401)
        // Checkear si order tiene el item
        if (order.items.some(e => {
            console.log(e.productId, req.body.productId)
            return e.productId == req.body.productId
        })) return next()
        return res.send(401)
    } catch (err) {
        next(err)
    }
}

module.exports = { userBoughtProduct }