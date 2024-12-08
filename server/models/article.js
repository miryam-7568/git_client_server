const mongoose = require("mongoose")
const articleSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
    },
    active:{
        type:Boolean,
        default:false
    }
},
{
    timestamps:true
})
module.exports = mongoose.model("Article",articleSchema)

/* 
    "_id": "674dd358956cd7adf4017091",
    "_id": "674dd399bfdc48fde1994fe0",
    "_id": "674dd3e1a7ae282a2d1b17f1",
*/