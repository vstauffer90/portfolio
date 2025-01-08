// Create web server
// npm install express
// npm install body-parser
// npm install ejs
// npm install mongoose

var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/yelp_camp", { useNewUrlParser: true });

// Schema setup
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create({
//     name: "Granite Hill",
//     image: "https://farm1.static