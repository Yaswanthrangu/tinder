const express = require('express');

const app = express();

app.use("/hello",(req, res) => {
    res.send("Hello");
})

app.use((req, res) => {
    res.send("Dashboard");
})

app.listen(7777, () => {
    console.log('Server is running on port 7777');
})