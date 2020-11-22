const store = require("../db/store");
const express = require("express");
const app = express();

// routes
app.get("/notes", (req, res) => {
    store
    .getNotes()
    .then(notes => res.json(notes))
    //catching errors if it's 500, printing in JSON
    .catch(err => res.status(500).json(err))
});

//post note

app.post("/notes", function(req, res) {
  store
  .addNotes(req.body)
  .then((note) => res.json(note))
  .catch(err => res.status(500).json(err))
});

//delete note
// app.delete("/api/notes/:id", function(req, res) {
//   store
//   .removeNotes(req.params.id)
//   res.json(db);
// });

module.exports = app;

//API routes:

//get all notes
  app.get("/notes", (req, res) => {
    store.read()
  });
