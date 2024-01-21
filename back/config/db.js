const mongoose = require("mongoose")

require("dotenv").config()

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("connected mongo")
}).catch((err)=>{
    console.log("failed: " + err)
})