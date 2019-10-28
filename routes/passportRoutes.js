const passport = require("passport");
const express = require("express");
const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// callback after user has granted permission to our app
router.get("/google/callback", passport.authenticate("google"));

router.get("/me", (req, res) => {
  res.send(req.user);
});

router.get("/logout", (req, res) => {
  req.logout();
  res.status(200).send(req.user);
});

module.exports = router;
