var fs = require("fs");
const util = require("util");
const uuidv1 = require("uuid");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    //add read and write functions in here, passing in the note in write.  
    read() {
      return readFileAsync("db/db.json", "utf8");
    };
    write(note) {
      return writeFileAsync("db/db.json", JSON.stringify(note));
    }

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
    // removeNotes(id) {
    // //   var id = req.params.id;
    
    // //   console.log(chosenNote);
    // // };
    // //   fs.unlink(__dirname + '/db/db.json', chosenNote, function (err) {
    // //   if (err) throw err;
    // //   console.log('Note deleted!');
    // // });
};

module.exports = new Store()
