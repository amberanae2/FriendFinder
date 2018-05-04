var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('app/public'));


require('./app/routing/apiroutes.js')(app); 
require('./app/routing/htmlroutes.js')(app);



app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
