const Sequelize = require('sequelize')
const sequelize = require('../config/db')

class User extends Sequelize.Model {}

User.init({
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },

}, { sequelize, 
    timestamps: false,
    modelName: "user", 
})

module.exports = User