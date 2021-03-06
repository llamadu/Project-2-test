var db = require("../models");

module.exports = function (app) {
  app.get("/api/Users", function (req, res) {
    db.User.findAll({
      include: [db.Tasks]
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  app.get("/api/Users/:id", function (req, res) {
    // add "include" property to options in findOne query
    // set the value to an array of the models to include in a left outer join
    // In this case it's db.Post
    db.User.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Tasks]
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  app.post("/api/users", function (req, res) {
    db.User.create(req.body).then(function (dbUser) {
      res.json(dbUser);
    });
  });
  app.put("/api/users/:id", function(req,res){
    db.User.update({
      where: {
        id: req.params.id
      },
      include: [db.Tasks]
    }).then(function(dbUser){
      res.json(dbUser);
    });
  });
  
  app.delete("/api/users/:id", function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });

};