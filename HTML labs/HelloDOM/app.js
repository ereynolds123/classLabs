const express = require("express");
const app = express();
const path = require("path");
const port= process.env.PORT || 8888;

app.use(express.static("public"));

app.listen(port, ()=>{
    console.log("Listening on port " + port)
});