const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/sk8', { useNewUrlParser: true, useUnifiedTopology: true })

const User = require('./models/User')
const Product = require('./models/Product')

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
        price: 23,
        category: {
            name: "skate",
            type: "calle"
        }
    },
    {
        name: "producto2",
        price: 50,
        category: {
            name: "skate",
            type: "calle"
        }
    },
    {
        name: "producto3",
        price: 17,
        category: {
            name: "skate",
            type: "longboard"
        }
    },
    {
        name: "producto4",
        price: 45,
        category: {
            name: "skate",
            type: "longboard"
        }
    },
    {
        name: "producto5",
        price: 60,
        category: {
            name: "ropa",
            type: "gorra"
        }
    },
]

data.forEach(async product => {
    var nuevoProducto = new Product(product)
    await nuevoProducto.save()
    console.log(nuevoProducto)
})

 users.forEach(async usuario => {
     var nuevoUsuario = new User(usuario)
     await nuevoUsuario.save()
     const creado = await User.findOne({ email: usuario.email })
     await creado.switchAdmin
 })