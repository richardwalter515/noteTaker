var fs = require("fs");
const util = require("util");
const { v1: uuidv1 } = require('uuid');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    //add read and write functions in here, passing in the note in write.  
    read() {
      return readFileAsync("db/db.json", "utf8");
    };

    write(note) {
      return writeFileAsync("db/db.json", JSON.stringify(note));
    };

    //get notes
    getNotes() {
      return this.read()
      .then((notes) => { 
        //parse and concat the notes
        let parsedNote;
        try {
          parsedNote = [].concat(JSON.parse(notes));
        } catch(err) {
          parsedNote = [];
        }
        return parsedNote });
    };

    //add notes
    addNotes(note) {
      const {title,text} = note;
      //add uuid here
      const newNote  = {title, text, id: uuidv1()};
      console.log('newNote:', newNote)
      //then return the notes with the new note
      return this.getNotes()
      .then((notes) => [...notes, newNote])
      .then((updatedNotes) => this.write(updatedNotes))
      .then(() => newNote)
    };

    //delete notes
    removeNotes(id) {
      return this.read().then(notes => {
        console.log('notes:', notes)
        const filteredNotes = JSON.parse(notes).filter(note => {
          return note.id !== id
        })
        this.write(filteredNotes)
        return filteredNotes;
      })
      // const selectedNote  = {title, text, id};
      // console.log('selectedNote:', selectedNote)
      // //then return the notes with the selected note unlinked
      // return this.readNotes()
      // .then((selectedNote) => this.unlink(selectedNote));
      // const {title, text, id} = chosenNote;

    };
};

module.exports = new Store()
