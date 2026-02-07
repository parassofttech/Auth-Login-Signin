const express = require("express");
const connectDB = require("./Models/db");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./Routes/authRouter");
const productRouter = require("./Routes/prodectRouter");
const contactRouter = require("./Routes/contactRouter");
require("dotenv").config();
const app = express();

connectDB();

app.get("/ping",(req,res)=>{
    res.send('PONG');
})

app.use(bodyParser.json());
app.use(cors());
app.use("/auth",router);
app.use("/products",productRouter);
app.use("/contact",contactRouter);

app.listen(process.env.PORT, ()=>{
    console.log("server is running",process.env.PORT);
});