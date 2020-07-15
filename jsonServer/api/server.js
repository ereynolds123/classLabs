//Sets up express
const express = require("express");
const got = require("got");
const app = express();
const port = process.env.PORT || 5050;

//Requires a path
const path = require("path");
const public = path.resolve("./public");
//Body parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Main path for the app
app.use(express.static("./public"));

//Different paths to reply page
app.get("/reply/:type", (req, res)=>{
//This is not working
res.sendFile(path.resolve("public/reply.html"))
})

//When the user checks their answers, sends a JSON file
const root = path.resolve(".");
app.get("/check", (req, res) => res.sendFile(root + "/example.json"));

//Takes user to the homepage
app.get("/", (req, res) => res.sendFile(public + "/index.html"));

//Takes user to the homepage
app.get("/index", (req, res) => res.sendFile(public + "/index.html"));

//Posts to the reply page
app.post("/reply", async (req, res) => {
  //API call. Gives us the body from the /check which is the example.json
  const { body } = await got("http://localhost:5050/check");
  let apiBody = JSON.parse(body);
  console.log(apiBody);

  //Name, quest, color off of form
  
  const { name, quest, color } = req.body;
  if (name===apiBody.name && quest===apiBody.quest && color===apiBody.color){
      res.redirect("/reply/true")
  }else {
      res.redirect("/reply/false")
  }
});

//This is a catch block. The asterisk is for anything.
app.get("*", (req, res) => {
  res.sendFile(public + "/404.html");
});

//Tells the command line where the port is listening
app.listen(port, () => console.log(`API app listeningport ${port}!`));
