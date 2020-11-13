var express = require("express");
var path = require("path");
var fs = require("fs");


//set up express port
var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//tell it to listen
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });



// routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "assets/index.html"))
});
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.html"))
});

//API routes:
//get note
// app.get("/api/notes", function(req, res) {
//     return res.json(reservations);
// });
// //post note
// app.post("/api/notes", function(req, res) {
//     return res.json(reservations);
// });
// //delete note
// app.get("/api/notes/:id", function(req, res) {
//     return res.json(reservations);
// });