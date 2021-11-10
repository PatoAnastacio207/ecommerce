const app = require('./app')

// db setup
const User = require("./models/User");
const Product = require("./models/Product");

// routes
const { productsRouter, usersRouter, authRouter } = require("./routes");
app.use("/api/products", productsRouter);
app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter)


app.listen(3001, () => {
  console.log("Listening...");
});