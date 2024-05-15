const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
 name:{
    required:true,
    type:String
},
 password:{
    required:true,
    type:string
}})






const User=mongoose.model("User",userSchema)

module.exports=User