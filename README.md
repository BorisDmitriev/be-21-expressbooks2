**Old Task:**
```Markdown
# BE Mongoose Express Books

## Description

Create a book management system using Express and MongoDB. The system will allow you to add books as well as delete all book data.

## What you will do

You will create an Express application and connect it to a MongoDB database. You will then implement the routes and controllers for adding books and deleting all book data.

## Tasks

**Task 1: Set Up Express Application**.

-   Work in the `server.js` file which acts as the entry point for the application.
-   Import the required modules: `express` and `mongoose`.
-   Connect the application to the MongoDB database `booksDB` (URL: `mongodb://127.0.0.1:27017/booksDB`).
-   Configure the application to parse JSON requests.
-   Define a base `/books` route for book operations.
-   Start the server on port 3000.

**Task 2: Define book model**.

-   Create a file `models/book.schema.js` and define the schema for a book.
-   The book schema should contain the following fields:
    -   `title` (string, required)
    -   `author` (subschema, required)
        -   `firstName` (string, required)
        -   `lastName` (string, required)
    -   `genre` (String, required)
    -   `year` (Number, required)
-   Export the book model.

**Task 3: Implement database logic for the book**.

-   Create a file `models/book.model.js`.
-   Import the book model.
-   Implement the `addBook` function to add a new book to the database.
    -   The function should accept the `title`, `author`, `genre` and `year` parameters.
    -   Create a new instance of the book model with the passed values.
    -   Save the book to the database.
    -   Return a Promise containing the saved book.
-   Export the `addBook` function.

**Task 4: Implement controller for book operations**.

-   Create a file `controllers/book.controller.js`.
-   Import the `addBook` function from `models/book.model.js`.
-   Implement the `httpAddBook` controller to add a new book.
    -   The controller should use the request parameters `title`, `author`, `genre` and `year`.
    -   Call the `addBook` function and pass the parameter values.
    -   If the book is successfully added, return a success message with status code 201.
    -   If there is an error while adding the book, send back an error message with status code 500.
-   Export the controller `httpAddBook`.

**Task 5: Implement routes for book operations**.

-   Create a file `routes/book.routes.js`.

-   Import the `httpAddBook` controller from `controllers/book.controller.js`.
-   Define the `/add` POST route to add a new book.
-   Use the `httpAddBook` controller as the handler for the POST route.
-   Export the router.

**Task 6: Implement database logic for the book**.

-   Edit the `models/book.model.js` file.
-   Implement the `purgeBooks` function to delete all book data.
    -   Call the `deleteMany` function on the book model to delete all books.
-   Export the `purgeBooks` function.


**Task 7: Implement route to delete all book data**.

-   Edit the `controllers/book.controller.js` file.
-   Implement the `httpPurgeBooks` controller to delete all book data.
-   Import the `purgeBooks` function from `models/book.model.js`.
    -   Call the `purgeBooks` function on the book model to delete all books.
    -   If the book data is successfully deleted, send back a success message with status code 200.
    -   If an error occurs while deleting the book data, send back an error message with status code 500.
-   Export the controller `httpPurgeBooks`.


**Task 8: Implement routes for deleting all book data**.

-   Edit the `routes/book.routes.js` file.
-   Import the controller `httpPurgeBooks` from `controllers/book.controller.js`.
-   Define the DELETE route `/purgeBooks` to delete all book data.
-   Use the `httpPurgeBooks` controller as a handler for the DELETE route.
-   Export the router.
```

**New Tasks:**
Please continue with the following tasks

**Task 9: Implement the `findById` function in the book model.**

-   Edit the `models/book.model.js` file.
-   Import the book model.
-   Implement the `findById` function to retrieve a book based on its ID.
    -   The function should accept the `id` parameter.
    -   Use the `findById` method of the book model to find the book with the corresponding ID.
    -   Return a promise that contains the found book.
-   Export the `findById` function.

**Task 10: Implement a route for retrieving a book based on its ID.**

-   Edit the `controllers/book.controller.js` file.
-   Implement the `httpGetBookById` controller to retrieve a book based on its ID.
-   The `httpGetBookById` function should use the request parameter `id`.
-   Import the function `findById` from `models/book.model.js`.
-   Call the `findById` function in `httpGetBookById` and pass the `id` as a parameter.
-   If the book is found, send the book as a JSON response with a status code of 200.
-   If the book is not found, send an error message with a status code of 404.
-   Export the `httpGetBookById` controller.

**Task 11: Implement the route for retrieving a book based on its ID.**

-   Edit the `routes/book.routes.js` file.
-   Import the `httpGetBookById` controller from `controllers/book.controller.js`.
-   Define the GET route `/:id` to retrieve a book based on its ID.
-   Use the `httpGetBookById` controller as the handler for the GET route.

After completing these tasks in the updated order, you will be able to use the `findById` function to retrieve a book based on its ID. The function will be used in the route `/books/:id`.

**Task 12: Implement the `getAllBooks` function in the book model.**

-   Edit the file `models/book.model.js`.
-   Implement the `getAllBooks` function to retrieve all books.
    -   The function should not accept any parameters.
    -   Use the `find` method of the book model to retrieve all books.
    -   Return a promise containing all the found books.
-   Export the `getAllBooks` function.

**Task 13: Implement the `httpGetAllBooks` controller to retrieve all books.**

-   Edit the file `controllers/book.controller.js`.
-   Import the `getAllBooks` function from `models/book.model.js`.
-   Implement the `httpGetAllBooks` controller to retrieve all books.
-   Call the `getAllBooks` function of the book model to retrieve all books.
-   If books are found, send the books as a JSON response with status code 200.
-   If no books are found, send an empty list as a JSON response with status code 200.
-   Export the `httpGetAllBooks` controller.

**Task 14: Implement routes to retrieve all books.**

-   Edit the file `routes/book.routes.js`.
-   Import the `httpGetAllBooks` controller from `controllers/book.controller.js`.
-   Define the GET route `/books` to retrieve all books.
-   Use the `httpGetAllBooks` controller as the handler for the GET route.

After completing these tasks in the given order, you will have the functionality to retrieve all books using the route `/books`. The `httpGetAllBooks` controller will handle this route and return all books as a JSON response.
