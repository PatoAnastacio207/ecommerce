const express = require("express");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const db = require("./config/db");
const cors = require("cors")

const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/User");

const app = express();

// middleware setup
app.use(express.json());
app.use(cookieParser());
app.use(cors())

// Session
app.use(sessions({
    secret: "123456",
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 3600 * 24 * 60 * 3
    }
}))

// Passport config
const passport = require("./config/authCofig");

// Passport session
app.use(passport.initialize());
app.use(passport.session());

// Routes
const { productsRouter, usersRouter, authRouter, cartRouter, checkoutRouter } = require("./routes");
app.use("/api/products", productsRouter);
app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter)
app.use("/api/cart", cartRouter)
app.use("/api/checkout", checkoutRouter)

app.use(errorHandler);
function errorHandler(err, req, res, next) {
    console.log("Error handler!")
    res.status(500);
}
  
  

module.exports = app