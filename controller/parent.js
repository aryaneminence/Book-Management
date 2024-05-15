const Book = require('../modals/book')
const Parent=require('../modals/parentsection')
const Section=require('../modals/section')

const addParent = async (req, res) => {
    try {
        const bookId = req.params.id;
        const { name, title, description } = req.body;

        const newParentSection = new Parent({
            name,
            title,
            description
        });
        await newParentSection.save();

        const book = await Book.findById(bookId);
        if (!book) {
            return res.status(404).json({ status: false, message: 'Book not found' });
        }
        newParentSection.book.push(bookId);
        await newParentSection.save();
        book.sections.push(newParentSection._id);
        await book.save();

        res.status(200).json(newParentSection);
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: false, message: error.message });
    }
};


const getSections=async(req,res)=>{
    try {
      const allData= await Section.find() 
      res.status(200).json({
        status:true,
        data:allData
      }) 
    } catch (error) {
      console.log(error)
      res.status(500).json({
        status:false,
        msg:"ALL Sections",
        
      })  
    }
}


module.exports = addParent;


