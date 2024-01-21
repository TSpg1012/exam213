const mongoose = require("mongoose")

const model = mongoose.Schema({
 id:String , 
 name:String ,
 type:String ,
 image:String ,
 review:Number ,
 price:Number ,
 discount:Number ,
},{
    collection:"bduexam"
})

const Produucts = mongoose.model("bduexam" , model)

module.exports = Produucts