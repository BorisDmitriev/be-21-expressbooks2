const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../server");

describe("Book Management System", () => {
    beforeAll(async () => {
        await mongoose.connect("mongodb://127.0.0.1:27017/booksDB", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    });

    afterAll(async () => {
        await mongoose.connection.close();
        // await new Promise((resolve) => setTimeout(() => resolve(), 500)); // avoid jest open handle error
    });

    beforeEach(async () => {
        await mongoose.connection.dropDatabase();
    });

    test("should add a new book", async () => {
        const book = {
            title: "Der Herr der Ringe",
            author: {
                firstName: "J. R. R.",
                lastName: "Tolkien",
            },
            genre: "Fantasy",
            year: 1955,
        };

        const response = await request(app).post("/books/add").send(book);

        expect(response.status).toBe(201);
    });

    test("should delete all books", async () => {
        // Add some books to the database
        const books = [
            {
                title: "Book 1",
                author: {
                    firstName: "John",
                    lastName: "Doe",
                },
                genre: "Fiction",
                year: 2021,
            },
            {
                title: "Book 2",
                author: {
                    firstName: "Jane",
                    lastName: "Smith",
                },
                genre: "Non-fiction",
                year: 2022,
            },
        ];

        await Promise.all(
            books.map((book) => request(app).post("/books/add").send(book))
        );

        const response = await request(app).delete("/books/purgeBooks");

        expect(response.status).toBe(200);
    });

    test("should get all books", async () => {
        // Add some books to the database
        const books = [
            {
                title: "Book 1",
                author: {
                    firstName: "John",
                    lastName: "Doe",
                },
                genre: "Fiction",
                year: 2021,
            },
            {
                title: "Book 2",
                author: {
                    firstName: "Jane",
                    lastName: "Smith",
                },
                genre: "Non-fiction",
                year: 2022,
            },
        ];

        await Promise.all(
            books.map((book) => request(app).post("/books/add").send(book))
        );

        const response = await request(app).get("/books");

        expect(response.status).toBe(200);
    });

    test("should get error for finding book by id", async () => {
        // Add some books to the database
        const books = [
            {
                title: "Book 1",
                author: {
                    firstName: "John",
                    lastName: "Doe",
                },
                genre: "Fiction",
                year: 2021,
            },
            {
                title: "Book 2",
                author: {
                    firstName: "Jane",
                    lastName: "Smith",
                },
                genre: "Non-fiction",
                year: 2022,
            },
        ];

        await Promise.all(
            books.map((book) => request(app).post("/books/add").send(book))
        );

        const response = await request(app).get("/books/1");

        expect(response.status).toBe(404);
    });
});
