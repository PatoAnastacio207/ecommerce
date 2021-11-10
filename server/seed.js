const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/sk8', { useNewUrlParser: true, useUnifiedTopology: true })

const { User, Product, Category } = require('./models')

const users = [
    {
        firstName: "kath",
        email: "kath@mail.com",
        password: "kath"
    },
    {
        firstName: "pato",
        email: "pato@mail.com",
        password: "pato"
    },
    {
        firstName: "ger",
        email: "ger@mail.com",
        password: "ger"
    },
    {
        firstName: "andres",
        email: "andres@mail.com",
        password: "andres"
    },
    {
        firstName: "escobar",
        email: "escobar@mail.com",
        password: "escobar"
    }
]

const data = [
    {
        name: "producto1",
        price: 23
    },
    {
        name: "producto2",
        price: 50
    },
    {
        name: "producto3",
        price: 17
    },
    {
        name: "producto4",
        price: 45
    },
    {
        name: "producto5",
        price: 60
    },
]

users.forEach(async usuario => {
    var nuevoUsuario = new User(usuario)
    await nuevoUsuario.save()
    const creado = await User.findOne({ email: usuario.email })
    await creado.switchAdmin
})