var express = require("express");

var router = express.Router();

var rico = require("../models/ricolist.js");

router.get("/", function(req,res) {
	rico.selectAll(function(data) {
		var hbsObject = {
			rico: data
		};
		res.render("index", hbsObject);
	});
});
