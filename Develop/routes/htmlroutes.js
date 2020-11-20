const path = require(path);
const router = express.router;
//responds with notes.html

//responds with all other routes.  Any time that the browser doesn't go to notes, show the index page.  It knows to get it because public is for static files and it will go into that folder and get it.
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})
module.exports = router;