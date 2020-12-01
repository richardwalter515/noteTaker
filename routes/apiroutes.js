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
app.delete("/notes/:id", function(req, res) {
  const id = req.params.id;
  store
  .removeNotes(id)
  .then((note) => res.json(note))
  .catch(err => {
    console.log("error", err);
    res.status(500).json(err)
  }
)});

module.exports = app;
