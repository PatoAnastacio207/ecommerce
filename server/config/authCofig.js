const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const { User } = require("../models")

// Passport
passport.use(
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      const user = await User.findOne({ email });
      if (!user) return done(null, false);
      const hash = await User.hash(password, user.salt);
      if (hash !== user.password) return done(null, false);
      return done(null, user);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user._id);
});

passport.deserializeUser(async function (id, done) {
  const user = await User.findOne({ _id: id });
  done(null, user);
});

module.exports = passport;