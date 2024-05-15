const express=require('express')
const book=require('../controller/books')
const addParent=require('../controller/parent')
const router=express.Router()

router.post('/addbook',book.addBook)
router.get('/allbooks',book.getBooks)
router.get('/getbook/:id',book.getBookByID)
router.put('/editbook/:id',book.updateBook)
router.delete('/delbook/:id',book.deleteBook)


router.post('/addparent/:id',addParent)

module.exports=router