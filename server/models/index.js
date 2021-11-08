const User = require('./User')
const Product = require('./Product')
const Category = require('./Category')

Product.belongsTo(Category)

module.exports = { User, Product, Category }