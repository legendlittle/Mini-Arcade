var db = require("../models");
var sequelize = require('sequelize')
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.json({ error: "401:Not authenticated" });

}
module.exports = function (app) {
  app.get("/scores", isLoggedIn, function (req, res) {
    db.user.findAll({
      attributes: ['username'],
      include: [{ model: db.Score, attributes: ['game', 'points'] }]
    }).then(function (dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/scores", isLoggedIn, function (req, res) {
    db.Score.create(
      {
        game: req.body.game,
        points: req.body.points,
        userId: req.user.id
      }
    ).then(function (score) {
      res.json(score);
    });
  });

  app.get('/:game/hiscores', isLoggedIn, function (req, res) {
    db.Score.findAll({
      where: {
        game: req.params.game
      },
      include: [{ model: db.user, attributes: ['username'] }],
      attributes: ['game',
        [sequelize.fn('MAX', sequelize.col('points')), 'hiscore']
      ]



    }).then(function (data) {
      res.json(data);
    })
  })

  app.get('/:user/best', isLoggedIn, function (req, res) {
    db.user.findAll({
      where: {
        username: req.params.user
      },
      include: [{ model: db.Score, attributes: ['game', [sequelize.fn('MAX', sequelize.col('points')), 'hiscore']] }],
      attributes: [
        'username',
      ]




    }).then(function (data) {
      res.json(data);
    });
  });
};
