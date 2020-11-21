const store = require("../db/store");
var app = require("express").Router();


const db = [];
// routes
app.get("/notes", (req, res) => {
    store
    .getNotes()
    .then(notes => res.json(notes))
    //catching errors if it's 500, printing in JSON
    .catch(err => res.status(500).json(err))
});

//post note

app.post("/api/notes", function(req, res) {
  store
  .addNote(req.body)
  .then((note) => res.json(note))
  .catch(err => res.status(500).json(err))
});

//delete note
app.delete("/api/notes", function(req, res) {
  store
  .removeNote(req.params.id)
  res.json(db);
});

module.exports = app;

//API routes:

//get all notes
  app.get("/api/notes", (req, res) => {
    store.read()
  });


      
      // // //delete note
      // app.get("/api/notes/:id", function(req, res) {
        //   var chosenNote = req.params.id;
        
        //   console.log(chosenNote);
        //   fs.unlink(__dirname + '/db/db.json', chosenNote, function (err) {
          //     if (err) throw err;
          //     console.log('Note deleted!');
          //   });
          // });

          
          
    //get note
    // app.get("/api/notes", function(req, res) {
    //     return fs.readFile(path.join(__dirname, "/db/db.json"), "utf8", function(error, data) {
    //         if (error) {
    //           return console.log(error);
    //         }
    //         console.log('data:', data)
    //         return res.json(JSON.parse(data));
    //       });
    // });