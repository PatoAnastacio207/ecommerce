const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require("../models/User");
const app = require("../app")

const GOOGLE_CLIENT_ID =
  "853910693747-q00iaamotqqnprgqeju02cjqnkb7rtcl.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

app.use(passport.initialize());
app.use(passport.session());

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

// Passport google
// passport.use(new GoogleStrategy({
//     clientID: GOOGLE_CLIENT_ID,
//     clientSecret: GOOGLE_CLIENT_SECRET,
//     callbackURL: "http://localhost:3001/api/auth/google/callback"
//   },
//   async function (accessToken, refreshToken, profile, done) {
//     let user = await User.findOne({ email: profile.email })
//     console.log(user)
//     if(user) console.log("ya existe")
//     else {
//       user = new User({
//         type: "google",
//         email: profile.email,
//         firstName: profile.name.givenName,
//         lastName: profile.name.familyName,
//         salt: ""
//       })
//       await user.save()
//     }
//     user = await User.find({ email: profile.email })
//     return done (null, user)
//   }
// ));


module.exports = passport;
