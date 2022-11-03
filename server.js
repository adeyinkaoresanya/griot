const express= require("express");
const mongoose = require('mongoose');


const db = require("./middleware/db");

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}));

db.connectToMongoDB();


PORT= process.env.PORT;



app.set("view engine", "ejs")
app.use(express.static("public"))







app.listen(PORT, () => {
    console.log(`Server is listening at PORT ${PORT}`)
})