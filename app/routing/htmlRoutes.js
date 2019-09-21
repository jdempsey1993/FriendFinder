/// Require path

var path = require("path")

/// Routing 

module.exports = function(app) {

    /// HTML Get Requests

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    })

    // Default to home if no matching route is present

    app.get("*",function(req,res){
        res.sendFile(path.join(__dirname,"../public/home.html"))
    })
}


   