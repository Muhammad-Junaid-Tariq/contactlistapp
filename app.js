/**
 * Created by Muhammad Junaid on 1/23/2017.
 */
var express = require("express");
var app = express();
var person = require("./models/person");

var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/contactlist");
var bodyparser = require("body-parser");
app.use(express.static(__dirname + "/public"));
app.use(bodyparser.json());

console.log("i am here");
app.get("/contactlist",person.read);
console.log("i am here2");
app.post("/contactlist",person.create);
console.log("i am here3");
app.put("/contactlist/:id",person.update);
app.delete("/contactlist/:_id",person.delete);
app.get("/contactlist/:id",person.edit);

var port = process.env.Port || 3000;
console.log("i am here32");
app.listen(port);