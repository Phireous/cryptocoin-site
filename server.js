//setup npm packages
var express = require("express");
var bodyParser = require("body-parser");

var port = process.env.PORT || 8888;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded())