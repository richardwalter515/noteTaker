var fs = require("fs");
const util = require("util");
const uuidv1 = require("uuid");
const express = require("express");
const app = express();
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);



class Store {
    //add functions in here.  
    read() {
      return readFileAsync("db/db.json", "utf8");
    };
    //get notes
    getNotes() {
      return this.read()
      .then(notes => { return notes });
      //parse and concat the notes
    };
    addNotes(note) {
      const {title,text} = note;
      const newNote  = {title, text, id: uuidv1()};
      return this.getNotes();
    };
    removeNotes(id) {

    };
};

module.exports = new Store()
