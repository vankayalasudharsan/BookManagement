const express = require('express')
const router = express.Router()

const booksController = require('../controller/books-controller')

router.get('/list', booksController.list)
router.post('/create',booksController.create)
router.put('/update',booksController.update)
router.delete('/delete', booksController.delete)
router.get('/view', booksController.detailedView)

module.exports = router