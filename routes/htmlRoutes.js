var db = require("../models");
var sequelize = require('sequelize')
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.json({ error: "401:Not authenticated" });

}
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
  app.get("/simonSays", isLoggedIn, function (req, res) {
    db.Score.findAll({
      where: {
        userId: req.user.id,
        game: 'ss'
      },
      include: [{ model: db.user, attributes: ['username'] }],
      attributes: [
        [sequelize.fn('MAX', sequelize.col('points')), 'hiscore']
      ]



    }).then(function (data) {
      ;
      res.render("simonSays", {
        ssHiScore: JSON.parse(JSON.stringify(data))[0].hiscore


      });
    });
  });

  // serve color game
  app.get("/colorGame", function (req, res) {
    db.Score.findAll({
      where: {
        userId: req.user.id,
        game: 'cg'
      },
      include: [{ model: db.user, attributes: ['username'] }],
      attributes: [
        [sequelize.fn('MAX', sequelize.col('points')), 'hiscore']
      ]



    }).then(function (data) {
      ;
      res.render("colorGame", {
        colorHiScore: JSON.parse(JSON.stringify(data))[0].hiscore


      });
    });
  });




  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};