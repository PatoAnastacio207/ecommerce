const mongoose = require('mongoose')
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    password: { type: String },
    salt: { type: String },
    isAdmin: { type: Boolean, default: false }
}, { versionKey: false })

// Para añadir metodos de instancia
userSchema.methods.switchAdmin = async function (password, salt) {
    await User.updateOne({ _id: this._id }, { isAdmin: !this.isAdmin})
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
userSchema.pre('save', async function(next) {
    // Prevenir que se cree un usuario admin
    this.isAdmin = false
    // Crear el salt
    const salt = await bcrypt.genSalt(10, this.passowrd)
    // Guardar el salt
    this.salt = salt
    // Generar la contraseña hasheada
    const hashedPassword = await User.hash(this.password, this.salt)
    // Guardar contraseña hasheada
    this.password = hashedPassword
    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User