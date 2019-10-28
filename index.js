const cookieSession = require("cookie-session");
const passport = require("passport");
const express = require("express");
const keys = require("./config/keys");

const app = express();
require("./services/db");
require("./services/passport");

const passportRoutes = require("./routes/passportRoutes");

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.COOKIE_KEY]
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", passportRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("listening on port " + PORT));
