const express = require('express')
const router = express.Router()
const { postData,getData } = require('../Controllers/DiabetiesController')

router.post('/',postData)
router.get('/',getData)



 
module.exports = router