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
    }
}, { sequelize, 
    timestamps: false,
    modelName: "product", 
})

module.exports = Product