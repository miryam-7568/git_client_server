require("dotenv").config()
const express = require("express")
const cors = require("cors")
const corsOptions=require("./config/corsOptions")
const connect2db = require("./config/connect2db")
const mongoose = require("mongoose")
const PORT = process.env.PORT || 1000
const app = express()
connect2db()

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static("public"))
app.use("/api/tasks",require("./routes/task"))
app.use("/api/articles",require("./routes/article"))

app.get("/",(req,res)=>{
    res.send("home page")
})
mongoose.connection.once("open",()=>{
    console.log("connected to DB :)")
    app.listen(PORT,()=>{
        console.log(`server running on port ${PORT}`)
    })
})

mongoose.connection.on("error",(err)=>{
    console.log(err)
})
