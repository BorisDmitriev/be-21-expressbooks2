const express = require('express')
const bookRoutes = express.Router()

const {httpAddBook, httpPurgeBooks, httpGetBookById, httpGetAllBooks} = require('../controllers/book.controller')

bookRoutes.get('/', httpGetAllBooks )
bookRoutes.get('/:id', httpGetBookById )
bookRoutes.post('/add', httpAddBook )
bookRoutes.delete('/purge', httpPurgeBooks )


module.exports = bookRoutes