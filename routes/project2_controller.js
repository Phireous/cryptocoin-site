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
  res.render("admin_login");
});

router.get("/admin_page", function(req, res){
  console.log('params', req.query);
  if (req.query.psw === "admin") {
    res.render("admin");
  } 
  else {
    res.render("admin");
  }
});

router.get("/admin/emails", function(req, res) {
  db.emails.findAll({}).then(function(data) {
    var hbsObject = {
      email: data
    };

    res.render("emails", hbsObject);
  });
});

router.get("/admin/update", function(req,res) {
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
  
  db.ricolist.update({
    name: req.body.name,
    successRating: req.body.successRating,
    officialWebsite: req.body.officialWebsite,
    status: req.body.status,
    teamLocation: req.body.teamLocation
  },
    {
      where: {
        id: req.body.list_id
      }
    }
  ).then(function(result) {
    console.log(result);
    res.redirect("/admin/update");
  });
});

module.exports = router;