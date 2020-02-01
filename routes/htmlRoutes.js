var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // serve hangman game
  app.get("/hangman", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("hangman", {
        msg: "Welcome!",
        // examples: 
      });
    });
  });

  // serve simon says game
  app.get("/simonSays", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("hangman", {
        msg: "Welcome!",
        // examples: 
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};