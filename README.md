# Book Management

* This APIS provides endpoints for managing books.

# Endpoints

## List Books
URL: /list
Method: GET
Description: Retrieves a list of all books.

## Create Book
URL: /create
Method: POST
Description: Creates a new book.
Request Body:
title (string, required): Title of the book.
author (string, required): Author of the book.
summary (string, required): Summary of the book.

## Update Book
URL: /update
Method: PUT
Description: Updates an existing book.
Request Body:
id (string, required): ID of the book to be updated.
title (string, optional): New title of the book.
author (string, optional): New author of the book.
summary (string, optional): New summary of the book.

## Delete Book
URL: /delete
Method: DELETE
Description: Soft deletes a book.
Request Body:
id (string, required): ID of the book to be deleted.

## Detailed Book View
URL: /view
Method: GET
Description: Retrieves detailed information about a specific book.
Query Parameter:
id (string, required): ID of the book to be viewed.


# Assumptions and Decisions
* The API uses a MongoDB database to store book information.
* Soft deletion is implemented, marking books as deleted without removing them from the database.


### Here's a brief Information of how it works This will help you understand how it's organized:

# Folder Structure
* Controllers: Handles what the app does when users ask for something.
* Routes : this folder contains all routes these are api end points and each will make execute certain controller.
* Models : This folder contains the databse schema definitions and database interactions for your application. and how it's stored/retrieved.
* Helpers: The helpers folder typically contains utility functions or helper modules that can be reused throughout your application.
* app.js : The main file that server starts and controls the entire app.
* Dotenv : The .env file typically contains all Passwords that are related to third party npm packages and sensitive information that your application needs.
* Package.json : It contains about the project, like its name, version, author, and dependencies used inormation its like identity for app.
* Package-lock.json : this folder contains the versions of dependencies and it will make to use of same version of dependecies every time.
* Postman Collection : Contains saved API requests and responses for testing.


# Dependencies used
1. Express  : A web framework for building the API.
2. mongodb  : This lets your application store and retrieve data. It's like a special storage place for information that your website needs.
3. mongoose : This helps you work with MongoDB, making it easier to store and organize data. It's like a helpful assistant for working with databases.
4. nodemon  : This watches for changes in your code and automatically restarts your server so you don't have to do it manually. It's like having someone keep an eye on your work and fix things when needed.


# Getting Started
1. Clone this repo.
2. Install dependencies with npm install
3. Change The Database Url
4. Run the app with npm start
5. Import the postman Collection and test the apis


# Postman Collection
* Import the Postman Collection JSON file to your postman for testing.
* setup environment in postman url key value as http://localhost:3673.
