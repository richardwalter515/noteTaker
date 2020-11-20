const store = require("../db/store");

var app = require("express").Router();

// routes
app.get("/notes", (req, res) => {
    store
    .getNotes()
    .then(notes => res.json(notes))
    //add .catch errors
})


module.exports = app;

//API routes:
//get note
app.get("/api/notes", function(req, res) {
    return fs.readFile(path.join(__dirname, "/db/db.json"), "utf8", function(error, data) {
        if (error) {
          return console.log(error);
        }
        console.log('data:', data)
        return res.json(JSON.parse(data));
      });
});
//post note
app.post("/api/notes", function(req, res) {
    var newNote = req.body;
    // var id = uuidv4(newNote);
    db.push(newNote);
    fs.writeFile(__dirname + '/db/db.json', JSON.stringify(db), function(error) {
      if(error){
        throw error;
      }
    });
    res.json(db);
});
// //delete note
app.get("/api/notes/:id", function(req, res) {
  var chosenNote = req.params.id;

  console.log(chosenNote);
  fs.unlink(__dirname + '/db/db.json', chosenNote, function (err) {
    if (err) throw err;
    console.log('Note deleted!');
  });
});