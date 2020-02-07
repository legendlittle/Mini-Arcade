var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {

    res.render("index")
  });

  // serve hangman game
  app.get("/hangman", function (req, res) {
    res.render("hangman")
  });

  // serve simon says game
  app.get("/simonSays", function (req, res) {
    res.render("simonSays")
  });

  // serve color game
  app.get("/colorGame", function (req, res) {
    res.render("colorGame")
  });




  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};