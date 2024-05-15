const mongoose=require("mongoose")
const parentSchema=mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    title:{
        required:true,
        type:String
    },
    description:{
        required:true,
        type:String
    },
   sections: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Section'
    }],
    book: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    }]
    
})
const Parent=mongoose.model('Parent',parentSchema)
module.exports=Parent
