/*
 * ## Server
 * The configuring and wiring of the server.
 */
var express = require("express")
  , path = require("path")
  , app = express()
  , http = require("http")
  , server = http.createServer(app);

app.set("port", 3000);
app.use(express.compress());
app.use(express.bodyParser());
app.use(app.router);
app.use(express["static"](path.join(__dirname, "../client")));

// this is only if you decide to use a templating engine:
// require("./routes")(app);

server.listen(app.get("port"));

console.log("Server listening on port " + app.get("port"));
