const app = require('./app')
require("./config/authCofig")

// db setup
const User = require("./models/User");
const Product = require("./models/Product");

// routes
// PASAR A APP
const { productsRouter, usersRouter, authRouter, cartRouter, checkoutRouter } = require("./routes");
app.use("/api/products", productsRouter);
app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter)
app.use("/api/cart", cartRouter)
app.use("/api/checkout", checkoutRouter)

app.listen(3001, () => {
  console.log("Listening...");
});