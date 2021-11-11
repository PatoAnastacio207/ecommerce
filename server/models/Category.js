const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    name: { type: String },
    type: { type: String },
}, { versionKey: false })

const Category = mongoose.model('Category', categorySchema)

module.exports = Category