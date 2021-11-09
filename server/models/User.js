const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    password: { type: String }
}, { versionKey: false })

// Para añadir metodos de instancia
userSchema.methods.instanceMethodExample = function () {
    console.log(this)
}

// Para añadir metodos de clase
userSchema.static('staticMethodExample', function () {
    console.log("this method is static")
})

// Para añadir virtuals
userSchema.virtual('fullName').get(function () {
    return this.firstName + " " + this.lastName
})

const User = mongoose.model('User', userSchema)

module.exports = User
/*
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
*/
