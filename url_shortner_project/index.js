const express = require("express")
const app = express();
const PORT = 8001

const {connectMongoDB} = require("./connection")
const path = require("path")

const URL = require("./model/url_model")

const cookieParser = require("cookie-parser")
const {restrictToLoginUserOnly, checkAuth} = require("./middleware/auth_middleware")
const urlRoute = require("./routes/url_routes")
const userRoute = require("./routes/user_routes")
const staticRoute = require("./routes/static_router")

// Setup Connection

connectMongoDB("mongodb://127.0.0.1:27017/short-url")

// Setup MiddleWare

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())

// Set Templates

app.set("view engine", "ejs");

app.set("views", path.resolve("./views/"))

// Routes

app.use("/url",restrictToLoginUserOnly, urlRoute)
app.use("/user",userRoute)
app.use("/",checkAuth, staticRoute)

// Start Server
app.listen(PORT, ()=>console.log("Server On"))