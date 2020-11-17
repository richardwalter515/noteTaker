var express = require("express");
var path = require("path");
var fs = require("fs");
var http = require("http");
const { RSA_NO_PADDING } = require("constants");


//set up express port
var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

//tell it to listen
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });



// routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"))
});
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));

});

//API routes:
//get note
app.get("/api/notes", function(req, res) {
    fs.readFile("/db/db.json", "utf8", function(error, data) {

        if (error) {
          return console.log(error);
        }
      
        return res.json(data);
      
      });
});
// //post note
app.post("/api/notes", function(req, res) {
    var newNote = req.body;
});
// //delete note
// app.get("/api/notes/:id", function(req, res) {
//     return res.json(reservations);
// });