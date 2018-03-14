const passport = require("passport");
const User = require("../models/User");

passport.use(User.createStrategy());
//
 //----
//Default Setting
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());