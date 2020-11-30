const express = require("express");
const apiroutes = require("./routes/apiroutes");
const htmlroutes = require("./routes/htmlroutes");
//initialize the app and create the port
const app = express();
const PORT = process.env.PORT || 3000;
//setting up body parsing, static, and route middleware 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
//connecting variable from routes folder
app.use("/api", apiroutes);
app.use("/", htmlroutes);
//start the server
app.listen(PORT, () => console.log(`this port is running on: ${PORT}`));