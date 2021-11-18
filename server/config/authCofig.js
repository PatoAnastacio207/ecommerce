const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");
// const app = require("../app")

// Crea la cookie
passport.serializeUser(function (user, done) {
  done(null, user._id || user.id);
});

// Transforma la cookie en un user
passport.deserializeUser(async function (id, done) {
  const user = await User.findOne({ _id: id });
  done(null, user);
});

// Passport normal
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      email = email.toLowerCase()
      const user = await User.findOne({ email });
      if (!user) return done(null, false);
      const hash = await User.hash(password, user.salt);
      if (hash !== user.password) return done(null, false);
      return done(null, user);
    }
  )
);

module.exports = passport;
