const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const request = require("request");
const fs = require("file-system");
const jsf = require("jsonfile");
require('dotenv').config();

const PORT = process.env.PORT || 5000

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    const redblue = ['blue', 'blue', 'red', 'red'];
    const fields = ['teamName', 'descore', 'flipcaps', 'stackcaps', 'catapult', 'flywheel'];
    res.render("landing", {
        redblue: redblue,
        inputfields: fields
    });
});

app.get("/stats", (req, res) => {
    const query = req.query;
    jsf.readFile("public/rishi.json")
        .then(obj => {

            res.render("stats", { data: obj })
        })
        .catch(error => console.log(error))
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});