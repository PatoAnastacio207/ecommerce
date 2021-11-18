const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    items: [
        {
            name: { type: String, required: true },
            price: { type: Number, required: true },
            quantity: { type: Number, required: true }
        }
    ],
    status: { type: String, defaul: "pending" },
    date: { type: Date, required: true },
    userId: { type: String, required: true },
    checkoutInfo: {
        address: { type: String, required: true },
        phone: { type: String, required: true }
    },
    total: { type: Number, required: true }
}, { versionKey: false })

const Order = mongoose.model("Order", orderSchema)

module.exports = Order