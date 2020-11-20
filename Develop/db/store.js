var fs = require("fs");
const util = require("util");
//npm package to generate unique ids
const uuidv1 = require("uuid/v1");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    //add functions in here.  
    read() {
        return readFileAsync("db/db.json", "utf8");
    }
    //get notes
    //delete notes
}
module.exports = new Store()
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
// //post note
app.post("/api/notes", function(req, res) {
    // var id = uuidv4();
    var newNote = req.body;
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