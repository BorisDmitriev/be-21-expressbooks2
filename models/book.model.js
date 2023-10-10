const Book = require('./book.schema')


function findById(id) {
    return Book.findById(id).exec()
}

function getAllBooks() {
    return Book.find()
}

function addBook(title,author,genre,year) {

    const book = new Book({
        title,
        author,
        genre,
        year,
    })

    return book.save()
}

function purgeBooks() {
    return Book.deleteMany()
}


module.exports = {addBook, purgeBooks, findById, getAllBooks}