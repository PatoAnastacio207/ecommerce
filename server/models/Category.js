const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    name: { type: String },
    type: { type: String },
}, { versionKey: false })

const Category = mongoose.model('Category', categorySchema)

module.exports = Category
/*
const Sequelize = require('sequelize')
const sequelize = require('../config/db')

class Category extends Sequelize.Model {}

Category.init({
    name: {
        type: Sequelize.STRING
    },
    type: {
        type: Sequelize.STRING
    }
}, { sequelize, 
    timestamps: false,
    modelName: "category", 
})
*/