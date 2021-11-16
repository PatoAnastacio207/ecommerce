const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    items: [
        {
            name: { type: String },
            price: { type: Number },
            quantity: { type: Number }
        }
    ],
    status: { type: String },
    date: { type: Date },
    userId: { type: String },
    checkoutInfo: {
        address: { type: String },
        phone: { type: String }
    },
    total: { type: Number }
}, { versionKey: false })

const Order = mongoose.model("Order", orderSchema)

module.exports = Order