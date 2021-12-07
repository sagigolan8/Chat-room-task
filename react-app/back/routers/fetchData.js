const express = require('express')
const { fetchData } = require('../controllers/fetchData')
const router = express.Router()

router.get('/:username', fetchData)



module.exports = router