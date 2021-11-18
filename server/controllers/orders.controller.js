const Order = require('../models/Order')
const transporter = require('../config/mailer')

class OrdersController {
    static async addOrder (req, res, next) {
        try{
            if (req.user && req.user._id == req.body.user._id) {
                // Crear orden
                const order = new Order({
                    items: req.body.cart.items.map(item => ({
                        name: item.name,
                        price: item.price,
                        quantity: 1
                    })),
                    status: "pending",
                    date: new Date(),
                    checkoutInfo: ({
                        ...req.body.user.checkoutInfo
                    }),
                    userId: req.body.user._id,
                    total: req.body.cart.total
                })
                await transporter.sendMail({
                    from: "Order registrada!",
                    to: req.body.user.email,
                    subject: "Order registrada!",
                    html:`
                    <h3>Tu orden fue registrada con exito!</h3>
                    <h4>Items comprados:</h4>
                    <ul>
                        ${order.items.map(item => `<li>${item.quantity} ${item.name}`)}
                    </ul>
                    total: $${order.total}
                    `
                })
                await order.save()
                return res.send(order)
            }
            return res.sendStatus(401)
        } catch {
            return next(err)
        }
    }
    static async getOrders (req, res, next) {
        try {
            const orders = await Order.find()
            return res.send(orders)
        } catch (err) {
            return next(err)
        }
    }
    static async getUserOrders (req, res, next) {
        try {
            const orders = await Order.find({ userId: req.user._id })
            return res.send(orders)
        } catch (err) {
            return next(err)
        }
    }
    static async updateStatus (req, res, next) {
        try {
            await Order.updateOne({ _id: req.params.id }, { status: req.body.status })
            const order = await Order.findOne({ _id: req.params.id }, { status: req.body.status })
            return res.send(order)
        } catch (err) {
            return next(err)
        }
    } 
    static async getSingleOrder (req, res, next) {
        try {
            const order = await Order.find({ _id: req.params.id })
            if (req.user && (req.user.isAdmin || order.authorId === req.user._id)) return res.send(order[0])
            else return res.sendStatus(401)
        } catch (err) {
            return next(err)
        }
    }
}

module.exports = OrdersController