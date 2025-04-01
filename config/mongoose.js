//mongoose is used to preform operations on the database
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/testingdb");

const db = mongoose.connection

db.on("error", err => console.log(err));

db.on("open", () => console.log("connected to MongoDB"));

module.exports = db;

