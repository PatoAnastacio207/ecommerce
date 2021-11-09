const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const localStrategy = require("passport-local").Strategy;

// db setup
const { User, Product, Category } = require("./models");
const db = require("./config/db");

// middleware setup
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
      User.findOne({ where: { email } })
        .then((user) => {
          if (!user) {
            return done(null, false);
          }

          user.hash(password, user.salt).then((hash) => {
            if (hash !== user.password) {
              return done(null, false);
            }

            return done(null, user); 
          });
        })
        .catch(done); 
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findByPk(id)
    .then((user) => {
      done(null, user);
    })
    .catch(done);
});

// routes
const { productsRouter } = require("./routes");
app.use("/api/products", productsRouter);

db.sync({ force: false }).then(() => {
  app.listen(3001, () => {
    console.log("Listening...");
  });
});
