const mongoose=require('mongoose')
const sectionSchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    book:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book',
    },
    
    parentSection: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Section',
    },
  });
  

const Section = mongoose.model("Section",sectionSchema)
module.exports=Section