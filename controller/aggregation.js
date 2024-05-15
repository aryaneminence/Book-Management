const Book = require("../modals/book");
const mongoose=require('mongoose')
const Section = require("../modals/section");
const Parent = require("../modals/parentsection");

const aggreController = async (req, res) => {
    try {
        const bookId = new mongoose.Types.ObjectId(req.params.id);

        const result = await Book.aggregate([
            { $match: { _id: bookId } },  
            {
                $lookup: {
                    from: 'sections',
                    localField: 'sections',
                    foreignField: 'parentSection',
                    as: 'sections'
                }
            },
            {
                $lookup: {
                    from: 'parents',
                    localField: 'sections.parentSection',
                    foreignField: '_id',
                    as: 'parents'
                }
            },
            {
                $project: {
                    _id: 1,
                    name: 1,
                    author: 1,
                    description: 1,
                    parents: {
                        $map: {
                            input: '$parents',
                            as: 'parent',
                            in: {
                                _id: '$$parent._id',
                                name: '$$parent.name',
                                title: '$$parent.title',
                                description: '$$parent.description',
                                sections: {
                                    $map: {
                                        input: {
                                            $filter: {
                                                input: '$sections',
                                                as: 'section',
                                                cond: { $eq: ['$$section.parentSection', '$$parent._id'] }
                                            }
                                        },
                                        as: 'section',
                                        in: {
                                            _id: '$$section._id',
                                            name: '$$section.name',
                                            title: '$$section.title',
                                            description: '$$section.description',
                                            parentSection: '$$section.parentSection'
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        ]);


        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: false, message: error.message });
    }
};



const aggre2 = async (req, res) => {
    try {
        const bookId = req.params.id;
       const result= await  Book.findById(bookId)
       
            // .populate('sections').exec()
            .populate({
                path: 'sections',
                populate: {
                    path: 'sections', 
                    model: 'Section'
                }
            })
            .exec();
                console.log(result);
                res.status(200).json(result);
     
          
 } catch (error) {
        console.error(error);
        res.status(500).json({ status: false, message: error.message });
    }
};

module.exports = {aggreController,aggre2};
