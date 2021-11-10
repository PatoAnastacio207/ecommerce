const express = require("express");
const passport = require("passport");
const router = express.Router();
const UsersController = require("../controllers/users.controller")

router.post("/register", UsersController.register)
router.post("/login", passport.authenticate("local"), UsersController.login)
router.get("/google", passport.authenticate("google", { scope: ['email', 'profile'] }), UsersController.login)
router.get("/google/callback", passport.authenticate("google", {
    successRedirect: '/api/auth/success',
    failureRedirect: '/api/auth/failure'
}))
router.post("/logout", UsersController.logout)
router.get("/logged", UsersController.getLogged)

router.get('/success', (req, res) => {
    res.sendStatus(200)
})
router.get('/failure', (req, res) => {
    res.sendStatus(401)
})

module.exports = router;