const express= require("express");
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");
require("dotenv").config()



const {authUser}= require("./middleware/auth")
const userRoute= require("./routes/user")
const blogRoute= require("./routes/homeRouter")
const createRoute= require("./routes/createRouter")


PORT= process.env.PORT;

const db = require("./middleware/db");


const app = express()




app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

db.connectToMongoDB();

app.set("view engine", "ejs")
app.use(express.static("public"))




app.use('/', blogRoute);
app.use('/', userRoute);
app.use('/write', authUser, (req,res) => res.render("createBlog"));







app.listen(PORT, () => {
    console.log(`Server is listening at PORT ${PORT}`)
})