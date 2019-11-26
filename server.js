/// NPM Packages required

var express = require("express");
var path = require("path");

// Connection to Express

// Tells node that we are creating an "express" server
var app = express();

// Setting inital port
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//// Router code

require("./app/routing/apiRoute")(app);
require("./app/routing/htmlRoutes")(app);

/// Adding listner to start server

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
