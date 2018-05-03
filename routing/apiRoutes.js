var surveyData = require("../data/surveyData");
var friendsData = require("../data/friendsData");


module.exports = function(app) {
  

  app.get("/api/survey", function(req, res) {
    res.json(surveyData);
  });

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/survey", function(req, res) {

    if (surveyData.length < 5) {
      surveyData.push(req.body);
      res.json(true);
    }
    else {
      friendsData.push(req.body);
      res.json(false);
    }
  });

 

  app.post("/api/clear", function() {
    surveyData = [];
    friendsData = [];

    console.log(surveyData);
  });
};
