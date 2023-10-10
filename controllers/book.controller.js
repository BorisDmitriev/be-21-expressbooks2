const {addBook, purgeBooks, findById, getAllBooks} = require('../models/book.model')

async function httpGetAllBooks( req, res ){
    try {
        const books = await getAllBooks()
        res.status(200).json({ data: books })
    } catch (error) {
        res.status(404).json( { message: "Retrieving all books failed" } )
    }
}

async function httpGetBookById( req, res ){
    // const { id } = req.query
    const { id } = req.params
    try {
        const book = await findById(id)
        res.status(200).json({ data: book })
    } catch (error) {
        res.status(404).json( { message: "Retrieving a new book failed" } )
    }
}

async function httpAddBook( req, res ){
    const {title, author, genre, year } = req.body
    try {
        await addBook(title, author, genre, year)
        res.status(201).json({ message: "Book added" })
    } catch (error) {
        res.status(500).json( { message: "Adding a new book failed" } )
    }
}

async function httpPurgeBooks( req, res ){
    try {
        await purgeBooks()
        res.status(200).json({ message: "Books deleted" })
    } catch (error) {
        res.status(500).json( { message: "Deleting books failed" } )
    }
}

module.exports = {httpAddBook, httpPurgeBooks, httpGetBookById, httpGetAllBooks}