const express = require("express");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const db = require("./config/db");
const cors = require("cors")

const app = express();

// middleware setup
app.use(express.json());
app.use(cookieParser());
app.use(cors())

app.use(sessions({
    secret: "123456",
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 3600 * 24 * 60 * 3
    }
}))


const passport = require('./config/authCofig')

app.use(passport.initialize());
app.use(passport.session());

module.exports = app