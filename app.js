var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

// Routes for site. Likely refactor later into separate file.
app.get("/", function(req,res){
	res.render("home")
})

app.get("/about", function(req,res){
	res.render("about")
})

app.get("/projects", function(req,res){
	res.render("projects")
})

// Catch all for page not found
app.get("*", function(req,res){
	res.render("404")
})


// listner for server start
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Portfolio Server has started");
});