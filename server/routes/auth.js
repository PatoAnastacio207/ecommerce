const express = require("express");
const passport = require("passport");
const router = express.Router();
const UsersController = require("../controllers/users.controller")

router.post("/register", UsersController.register)
router.post("/login", passport.authenticate("local"), UsersController.login)
router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);
router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/failed', successRedirect: '/good' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  }
);
router.get('/failed', (req, res) => res.send('You Failed to log in!'))

// In this route you can see that if the user is logged in u can acess his info in: req.user
router.get('/good', (req, res) => res.send(`Welcome mr ${req.user.displayName}!`))
router.post("/logout", UsersController.logout)
router.get("/logged", UsersController.getLogged)

router.get('/success', (req, res) => {
    res.sendStatus(200)
})
router.get('/failure', (req, res) => {
    res.sendStatus(401)
})

module.exports = router;