//setup npm packages
var express = require("express");
var bodyParser = require("body-parser");


var port = process.env.PORT || 8888;

var app = express();

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");