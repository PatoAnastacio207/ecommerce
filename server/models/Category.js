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

module.exports = Category