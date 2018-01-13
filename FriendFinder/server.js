// npm packages
// ==============================================================================

var express = require("express");
var bodyParser = require("body-parser");

// Express server setup
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets port
var PORT = process.env.PORT || 3000;

// Allows Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Router
// ================================================================================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Listener
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});