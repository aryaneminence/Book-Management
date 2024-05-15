const mongoose=require('mongoose')
const bookSchema=mongoose.Schema({
name:{
      type:String,
       required:true
},
title:{
        type:String,
        required:true
},
author:{
        type:String,
        required:true 
},
 description:{
          type:String,
          required:true
},
sections: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Parent'
}]

})

const Book=mongoose.model("Book",bookSchema)
module.exports =Book
