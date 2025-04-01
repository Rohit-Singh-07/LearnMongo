const express = require('express');
const app = express();
const mogooseconnection = require('./config/mongoose')
const userModel = require('./models/user')


const dummyData = [
    {username: "John", name: "John", email: "john@example.com", password: "123"},
    {username: "Jane", name: "Jane", email: "jane@example.com", password: "456"},
    {username: "Bob", name: "Bob", email: "bob@example.com", password: "789"}
]

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get("/create", async (req, res, next) => {
    let createduser = await userModel.create({
        username: "Rohit",
        name: "Rohit",
        email: "someone@example.com",
        password: "dont tell"
    })

    res.send(createduser);
});

app.get("/read", async (req, res, next) => {
    let allUsers = await userModel.find({})
    res.send(allUsers);
});

app.get("/readone", async (req, res, next) => {
    let user = await userModel.findOne({username: "John Doe"})
    res.send(user);
});

app.get("/update", async (req, res, next) => {
    let updatedUser = await userModel.findOneAndUpdate({name: "Rahul"}, {name: "Shakil"}, {new: true})
    res.send(updatedUser);
});

app.get("/delete", async (req, res, next) => {
    let deletedUser = await userModel.findOneAndDelete({username: "Rohit"})
    res.send(deletedUser);
});

app.get ("createmany", async (req, res, next) => {
    let createdUsers = await userModel.insertMany(dummyData)
    res.send(createdUsers);
});

// find operations
// eq
// ne
// lt
// lte
// gt
// gte
// in
// nin
// exists
// or
// size

// regex

// relationships, embbeding, refrenshing, population, aggregation

app.get ("/users", async (req, res, next) => {
    let users = await userModel.find({
        $and: [{username: "Rohit"}, {age: {$gte: 20},}]
    })

    res.send(users);
});



app.listen(3000);

// Cluster , Database, Collections and document
// connect to database -> then we can perform operations on database - read, create, update, delete // crud 
