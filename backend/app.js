
const express = require("express");
const app = express();
const db = require("./src/database/db");
const userRouter = require("./src/router/userRoutes");
const bodyParser = require("body-parser");
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use("/api", userRouter); //parent api for user registers


// data base
db.on("open", () => {
    app.listen(3000, () => {
        console.log("http://localhost:3000/");
    })

});
app.get("/", (req, res) => {
    res.send("im connected to server")
})

db.on("error", () => {
    console.log("error db");
});