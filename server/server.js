const express = require('express')
const app = express()

// db setup
const { User, Product, Category } = require('./models')
const db = require('./config/db')

// middleware setup
app.use(express.json())

// routes
const { productsRouter } = require('./routes')
app.use('/api/products', productsRouter)

db.sync({force: true}).then(() => {
    app.listen(3001, () => {
        console.log("Listening...")
    })
})