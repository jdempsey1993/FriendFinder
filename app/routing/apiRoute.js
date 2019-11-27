/// Loading requsite data

var tableData = require("../data/friends.js");

// Routing

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(tableData);
  });

  // Post Request

  app.post("/api/friends", function(req, res) {
    var form = req.body;

    let userScores = form["scores[]"];

    let leastTotalDiff = Infinity;
    let bestMatchIndex = -1;
    //compare scores of user to each friend in friends array.
    for (let index = 0; index < 10; index++) {
      //let q=questions
      let totalDifference = 0;
      for (let q = 0; q < 10; q++) {
        //friend-i= an object and scores[q] is the number that we need - the users scores

        totalDifference += Math.abs(friends[index].scores[q] - userScores[q]);
      }
      if (totalDifference < leastTotalDiff) {
        leastTotalDiff = totalDifference;
        bestMatchIndex = index;
      }
    }

    return res.json(friends[bestMatchIndex]);
  });
};
