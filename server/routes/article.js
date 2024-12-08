const express = require("express")
const Article = require("../models/article")
const router = express.Router()

router.post("/",async(req,res)=>{
    const {title,body} = req.body
    if(!title){
        return res.status(400).send("error: no title :(")
    }
    if(!body){
        const article = await Article.create({title:title})
        res.json(article)
    }
    else{
        const article = await Article.create({title:title,body:body})
        res.json(article)
    }
})

module.exports = router