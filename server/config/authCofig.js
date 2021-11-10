const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const User = require("../models/User")

const GOOGLE_CLIENT_ID = "853910693747-q00iaamotqqnprgqeju02cjqnkb7rtcl.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

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
passport.use(new GoogleStrategy(
  {
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3001/api/auth/google/callback",
    passReqToCallback: true
  },
  async function(request, accessToken, refreshToken, profile, done) {
    // Checkear si existe
    let user = await User.findOne({ email: profile.email })
    // Si existe retornarlo
    if (user) return done(null, user);
    // Si no existe crear uno nuevo
    user = new User({
      email: profile.email,
      firstName: profile.given_name,
      lastName: profile.family_name,
      type: "google",
      salt: ""
    })
    await user.save()
    console.log("done")
    return done(null, user);
  }
));

passport.serializeUser(function (user, done) {
  done(null, user._id || user.id);
});

passport.deserializeUser(async function (id, done) {
  const user = await User.findOne({ _id: id });
  done(null, user);
});

module.exports = passport;