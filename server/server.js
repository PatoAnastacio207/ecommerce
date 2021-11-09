const app = require('./app')

// db setup
const { User, Product, Category } = require("./models");

    
// routes
const { productsRouter, usersRouter } = require("./routes");
app.use("/api/products", productsRouter);
app.use("/api/users", usersRouter);

app.listen(3001, () => {
  console.log("Listening...");
});
