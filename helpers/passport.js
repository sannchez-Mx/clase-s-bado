const User = require("../models/User");
const passport = require("passport");

passport.use(User.createStrategy());

//  serializeUser para traer el usuario
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

module.exports = passport;