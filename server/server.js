//const passport = require("./config/authCofig")
const app = require('./app')

// db setup
const User = require("./models/User");
const Product = require("./models/Product");

app.listen(3001, () => {
  console.log("Listening...");
});