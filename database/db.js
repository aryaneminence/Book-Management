const mongoose=require('mongoose')
const url='mongodb+srv://aryantrivedieminence:vHk6W7xcvHQoir3i@cluster0.3iuagqk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const Connection =async()=>{
try {
 await mongoose.connect(url)
 console.log("Database Connected Sucessfully")
} catch (error) {
   console.log(error,"Failure in the Database Connection") 
}}


module.exports=Connection
