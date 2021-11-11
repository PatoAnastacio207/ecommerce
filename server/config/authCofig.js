const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const User = require("../models/User");

const GOOGLE_CLIENT_ID =
  "853910693747-q00iaamotqqnprgqeju02cjqnkb7rtcl.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

// Passport normal
passport.use(
  new LocalStrategy(
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

// Passport google

const GoogleRegister = new LocalStrategy(
  {
    passReqToCallback: true,
    usernameField: "email",
    passwordField: "googleId",
  },

  function (req, email, password, done) {
    User.findOne({ email: req.body.email }).exec((err, user) => {
      console.log("STRATEGY", user);

      if (err) {
        return done(err, null);
      }
      // Si no existe el user crearlo y logearlo
      if (!user) {
        let newUser = new User({
          email: req.body.email,
          firstName: req.body.given_name,
          lastName: req.body.family_name,
          type: "google",
          salt: "",
        });

        newUser.save((error, inserted) => {
          if (error) {
            return done(error, null);
          }

          return done(null, inserted);
        });
      }
      // Si ya existe logearlo
      if (user) {
        req.logIn(user, function (error, data) {
          if (error) {
            return done(error, null)
          }
          return done(null, user);
        });
      }
    });
  }
);

passport.use("google-signup", GoogleRegister);

passport.serializeUser(function (user, done) {
  console.log("SERIALIZE", user);
  done(null, user._id || user.id);
});

passport.deserializeUser(async function (id, done) {
  console.log("DESERIALIZE");
  const user = await User.findOne({ _id: id });
  done(null, user);
});

module.exports = passport;
