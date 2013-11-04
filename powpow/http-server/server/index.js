/*
 * ## Server
 * The configuring and wiring of the server.
 */
var express = require("express")
  , path = require("path")
  , app = express()
  , http = require("http")
  , hbs = require("express-hbs")
  , server = http.createServer(app);

/*
 * We are using handlebars for templating.
 */
app.engine('hbs', hbs.express3({
  partialsDir: path.join(__dirname, '../client/tpl/partials'),
  contentHelperName: "content"
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../client/tpl'));
console.log(app.get("views"));

app.set("port", 3000);
app.use(express.compress());
app.use(express.bodyParser());
app.use(app.router);
app.use(express["static"](path.join(__dirname, "../client")));

require("./routes")(app);

server.listen(app.get("port"));

console.log("Server listening on port " + app.get("port"));
