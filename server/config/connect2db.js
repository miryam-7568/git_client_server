const mongoose = require("mongoose")
const connect2db = async ()=>{
    try{
        await mongoose.connect(process.env.DBURI)
    } catch (e){
        console.log("Error in connect2db: \n"+e)
    }
}

module.exports = connect2db