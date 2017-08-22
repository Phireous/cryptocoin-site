var express = require("express");

var router = express.Router();

var db = require("../models");

router.get("/", function(req,res) {
	db.ricolist.findAll({}).then(function(data) {
    var hbsObject = {
      rico: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});


module.exports = router;