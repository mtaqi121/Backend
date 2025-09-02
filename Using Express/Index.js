import bodyParser from "body-parser";
import express from "express";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.get("/form", (req, res) => {
  res.send(`<form action="/submit" method="POST">
      <input type="name" name="name" placeholder="Type your name here" />
      <button type="submit">Send</button>
    </form>`);
});

app.post("/submit", (req, res) => {
    console.log(req.body.name);
    res.send("Form submitted");
});

console.log("Server Started");
app.listen(3000);
