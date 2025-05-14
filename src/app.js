const express = require('express');

const app = express();

app.use("/hello",(req, res) => {
    res.send("Hello");
})

app.get("/user",(req, res) => {
    res.send({firstName: "John", lastName: "Doe"});
})

app.post("/user", (req, res) => {
    res.send("Data saved to DB");
})

app.listen(7777, () => {
    console.log('Server is running on port 7777');
})