const express = require("express");
const passport = require("passport");
const router = express.Router();
const UsersController = require("../controllers/users.controller")

router.post("/register", UsersController.register)
router.post("/login", passport.authenticate("local"), UsersController.login)
router.post("/google", (req, res) => {
    passport.authenticate("google-signup", function (error, user, info) {
        if (error) {
           console.log(error)
          return res.status(500).json({
            message: error || "Something happend",
            error: error.message || "Server error",
          });
        }
        console.log('ROUTE', user)
        // req.logIn(user, function (error, data) {
            
        //   if (error) {
        //     return res.status(500).json({
        //       message: error || "Something happend",
        //       error: error.message || "Server error",
        //     });
        //   }
        //   return res.json(user);
        // });
      })(req, res);
})
// router.get("/google/callback", passport.authenticate("google", {
//     successRedirect: '/api/auth/success',
//     failureRedirect: '/api/auth/failure'
// }))
router.post("/logout", UsersController.logout)
router.get("/logged", UsersController.getLogged)

router.get('/success', (req, res) => {
    res.sendStatus(200)
})
router.get('/failure', (req, res) => {
    res.sendStatus(401)
})

module.exports = router;