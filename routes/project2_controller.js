var express = require("express");

var router = express.Router();

var db = require("../models");

router.get("/", function(req,res) {
	db.ricolist.findAll({}).then(function(data) {
    var hbsObject = {
      rico: data
    };
    
    res.render("index", hbsObject);
  });
});

router.get("/admin", function(req, res) {
  res.render("admin");
});

router.get("/emails", function(req, res) {
  res.render("emails");
});

router.get("/update", function(req,res) {
	db.ricolist.findAll({}).then(function(data) {
    var hbsObject = {
      rico: data
    };
    
    res.render("update", hbsObject);
  });
});

router.get("/api/:id", function(req, res) {
  db.ricolist.findOne({
    where: {
      id: req.params.id
    }
  }).then(function(result) {
    
    console.log(result.dataValues);
    res.render("single", result.dataValues);
  });
});

router.put("/ricolist/update", function(req, res) {

  // db.ricolist.update({
  //   name: req.body.name,
  //   successRating: req.body.successRating,
  //   officialWebsite: req.body.officialWebsite,
  //   status: req.body.status,
  //   teamLocation: req.body.teamLocation
  // },
  //   {
  //     where: {
  //       id: req.body.list_id
  //     }
  //   }
  // ).then(function(result) {
  //   res.redirect("/update");
  // });
  router.put("/api/posts", function(req, res) {
    db.ricolist.update(
      req.body,
      {
        where: {
          id: req.body.list_id
        }
      }).then(function(dbPost) {
        res.json(dbPost);
      });
  });
});

module.exports = router;