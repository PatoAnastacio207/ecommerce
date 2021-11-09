const mongoose = require('mongoose')
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    password: { type: String },
    salt: { type: String }
}, { versionKey: false })

// Para añadir metodos de instancia
userSchema.methods.instanceMethodExample = function () {
    console.log(this)
}

// Para añadir metodos de clase
userSchema.static('hash', function (password, salt) {
    return bcrypt.hash(password, salt)
})

// Para añadir virtuals
userSchema.virtual('fullName').get(function () {
    return this.firstName + " " + this.lastName
})

// Before create
userSchema.pre('save', function(next) {
    // Crear el salt
    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User
/*
const Sequelize = require('sequelize')
const sequelize = require('../config/db')
const bcrypt = require("bcrypt");

class User extends Sequelize.Model {
    hash(password, salt) {
        return bcrypt.hash(password, salt);
    }
}

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
    salt: {
        type: Sequelize.STRING
    }

}, { sequelize, 
    timestamps: false,
    modelName: "user", 
})
*/
