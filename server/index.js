let mongoose = require("mongoose");
const express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
//resolve file path
let path = require("path");
//import settings
let settings = require("./config/settings.js");
let danceRouter = require("./routes/dance.js");
let loginRouter = require("./routes/login.js");
const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());


app.use("/danceify",danceRouter);
app.use(loginRouter);

//setup static files
app.use(express.static(path.resolve(__dirname, "..", "build")));
//send index.html file when someone comes to /
app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname, "..", "build", "index.html"))
});

app.listen(port,()=>{
    console.log(`listening to ${port}`)
});

mongoose.connect(settings.db);