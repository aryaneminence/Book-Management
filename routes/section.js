const express=require('express')
const Section=require('../controller/section')
const {aggreController,aggre2}=require('../controller/aggregation')
const router=express.Router()


router.post('/addsection/:id',Section.addSection)

router.get('/all/:id',aggreController)

router.get('/pop/:id',aggre2)

router.get('/section/:id',Section.getSection)
router.put('/editsec',Section.updatesection)
router.delete('/delsec',Section.deleteSection)



module.exports=router
