const express = require("express")
const Task = require("../models/task")
const router = express.Router()

router.post("/",async(req,res)=>{
    const {title} = req.body
    if(!title){
        return res.status(400).send("error: no name :(")
    }
    const task = await Task.create({title:title})
    res.json(task)
})

module.exports = router