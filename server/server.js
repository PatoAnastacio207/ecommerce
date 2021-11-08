const express = require('express')
const app = express()
const { User, Product, Category } = require('./models')

const db = require('./config/db')

const skate = {
    name: "skate longboard",
    price: 299.99,
    description: "Skateboard but long",
    imgUrl: "http://localhost:3001/static/imgs/skate_longboard",
    inventory: 15
}

db.sync({force: true}).then(() => {
    app.listen(3001, () => {
        console.log("Listening...")
    })
})