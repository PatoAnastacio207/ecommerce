const productsRouter = require('./products')
const usersRouter = require('./users')
const authRouter = require("./auth")
const cartRouter = require("./cart")
const checkoutRouter = require("./checkout")

module.exports = { productsRouter, usersRouter, authRouter, cartRouter, checkoutRouter }