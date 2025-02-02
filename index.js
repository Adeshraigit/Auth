const express = require("express");

const app = express();
const port = 3000;  


app.post("/signup",(req, res) => {
    res.send("Signup");
});

app.post("/signin",(req, res) => {
    res.send("Signup");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})