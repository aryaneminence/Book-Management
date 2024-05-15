const Book =require('../modals/book')
const Parents=require("../modals/parentsection")
const Section = require('../modals/section')
const addSection = async (req, res) => {
    try {
        const bookId = req.params.id;
        const { name, title, description, parentSectionId } = req.body;
        let parentSection;
        if (parentSectionId) {
            parentSection = await Parents.findById(parentSectionId);
        } else {
            parentSection = new Parents({ name, title, description, sections: [] });
            await parentSection.save();
        }
        const newSection = new Section({ name, title, description, parentSection: parentSection._id });
        await newSection.save();
        parentSection.sections.push(newSection._id);
        await parentSection.save();
        res.status(200).json({ message: 'Section added successfully', section: newSection });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: false, message: error.message });
    }
};
const updatesection=async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}
const getSections=async(req,res)=>{
    try {
  
    } catch (error) {
        
    }
}
const getSection=async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}
const deleteSection=async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}


module.exports={
    addSection,
    updatesection,
    getSection,
    getSections,
    deleteSection
}