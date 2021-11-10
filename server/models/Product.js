const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: { type: String },
    price: { type: Number },
    description: { type: String },
    imgUrl: { type: String },
    inventory: { type: Number },
    category: {
        name: { type: String },
        type: { type: String }
    },
}, { versionKey: false })

const Product = mongoose.model('Product', productSchema)

module.exports = Product