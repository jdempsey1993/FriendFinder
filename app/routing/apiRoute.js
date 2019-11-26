/// Loading requsite data

var tableData = require("../data/friends.js");

// Routing

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(tableData);
  });

  // Post Request

  app.post("/api/friends", function(req, rest) {
    if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    } else {
      tableData.push(req.body);
      res.json(false);
    }
  });
};
