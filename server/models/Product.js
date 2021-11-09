const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    name: { type: String },
    type: { type: String },
}, { versionKey: false })

const productSchema = new mongoose.Schema({
    name: { type: String },
    price: { type: Number },
    description: { type: String },
    imgUrl: { type: String },
    inventory: { type: Number },
    category: categorySchema,
}, { versionKey: false })

const Product = mongoose.model('Product', productSchema)

module.exports = Product
/*
const Sequelize = require('sequelize')
const sequelize = require('../config/db')

class Product extends Sequelize.Model {}

Product.init({
    name: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.FLOAT
    },
    description: {
        type: Sequelize.TEXT
    },
    imgUrl: {
        type: Sequelize.TEXT
    },
    inventory: {
        type: Sequelize.INTEGER
    },
}, {
    sequelize, 
    timestamps: false,
    modelName: "product", 
})
*/
