const mongoose = require("mongoose")
const taskSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    complete:{
        type:Boolean,
        default:false
    }
},
{
    timestamps:true
})
module.exports = mongoose.model("Task",taskSchema)
/* 
    "_id": "674dd0b0ec5cc15dee4356c1",
    "_id": "674dd162db4947bbec43545d",
    "_id": "674dd189278a18e6ce2c8986",
*/