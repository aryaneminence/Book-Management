const Book=require('../modals/book')

const addBook=async(req,res)=>{
const {name,author,title,description}=req.body
if(!name || !author ||!title ||!description){
    res.status(400).json({
        status:false,
        msg:"please provide all details"
})}try {
const book= await  new Book({
    name:name,
    title:title,
    author:author,
    description:description
}) 
await book.save()
res.status(200).json({status:true,msg:"Book added sucessfully",data:book})
} catch (error) {
 console.log(error)     
 
 res.status(500).json({
    status:false,
    msg:error,
 })
    }
}

const updateBook=async(req,res)=>{
    const id=req.params.id
const {name,author,title,description}=req.body
try {
const updatedbook=await Book.findByIdAndUpdate(id,{
    name:name,
    title:title,
    author:author,
    description:description

})
res.status(200).json({status:true,msg:"Book updated sucessfully",data:updatedbook})
    


} catch (error) {
        res.status(500).json({
            status:false,
            msg:error
           })   
    }
}
const getBooks=async(req,res)=>{
    try {
  const allbooks=await Book.find()
  res.status(200).json({
    status:true,
    msg:"Book Get Sucessfully",
    data:allbooks
})       
    } catch (error) {
        res.status(500).json({
            status:false,
            msg:error
 })   
    }
}

const getBookByID=async(req,res)=>{
    const id=req.params.id
    try {
    const book =await Book.findById(id)
    res.status(200).json({
        status:true,
        msg:"Book Get Sucessfully",
        data:book
    })    
    } catch (error) {
        res.status(500).json({
            status:false,
            msg:error
           }) 
    }
}
const deleteBook=async(req,res)=>{
const id=req.params.id
try {
const deletedBook= await Book.findByIdAndDelete(id)   
res.status(200).json({
    status:true,
    msg:"Book Deleted Sucessfully",
    data:deletedBook
})
 } catch (error) {
       res.status(500).json({
        status:false,
        msg:error
       })
    }
}




module.exports={
    addBook,
    updateBook,
    getBookByID,
    getBooks,
    deleteBook
}