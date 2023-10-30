const books = require('../models/books');
const response = require("../helper/responsehelper"); //response hepler imported from helper file

exports.list = async (req, res) => {
    try {
        const booksList = await books.find()

        if (booksList.length === 0) {
            return response.success(res, {
                statusCode: 200,
                message: "No Books Found",
            });
        }

        return response.success(res, {
            statusCode: 200,
            message: "Books fetched successfully",
            data: booksList
        });
    } catch (e) {
        console.log("Error While fetching Books List:", e);
        return response.error(res, {
            statusCode: 500,
            message: "Something Went Wrong",
        });
    }

}

exports.create = async (req, res) => {
    const { title, author, summary } = req.body

    if (!title || title === "") {
        return response.success(res, {
            statusCode: 400,
            message: "Required Title For Book",
        });
    }
    
    if (!author || author === "" ) {
        return response.success(res, {
            statusCode: 400,
            message: "Required Author Book",
        });
    }
    
    if (!summary || summary === "") {
        return response.success(res, {
            statusCode: 400,
            message: "Required Summary For Book",
        });
    }
    
    try {
        const book = new books({
            title: title,
            author: author,
            summary: summary
        })

        const createdBook = await book.save()

        return response.success(res, {
            statusCode: 200,
            message: "Book Created successfully",
            data: createdBook
        });
    } catch (e) {
        console.log("Error While Creating Book:", e);
        return response.error(res, {
            statusCode: 500,
            message: "Something Went Wrong",
        });
    }

}

exports.update = async (req, res) => {
    const { title, author, summary, id } = req.body
    const now = new Date();
    try {
        const updatedBook = await books.findByIdAndUpdate(
            id,
            { title, author, summary, updatedAt: now },
            { new: true }
        );
        if (!updatedBook) {
            return response.success(res, {
                statusCode: 404,
                message: "Book not found",
            });
        }
        return response.success(res, {
            statusCode: 200,
            message: "Book Updated Successfully",
            data: updatedBook
        });

    } catch (e) {
        console.log("Error While Creating Book:", e);
        return response.error(res, {
            statusCode: 500,
            message: "Something Went Wrong",
        });
    }
}

exports.delete = async (req, res) => {
    const { id } = req.body
    const now = new Date();
    try {
        const deletedBook = await books.findByIdAndUpdate(
            id,
            { deletedAt: now },
            { new: true }
        );
        if (!deletedBook) {
            return response.success(res, {
                statusCode: 404,
                message: "Book not found",
            });
        }
        return response.success(res, {
            statusCode: 200,
            message: "Book Deleted Successfully",

        });

    } catch (e) {
        console.log("Error While Deleting Book:", e);
        return response.error(res, {
            statusCode: 500,
            message: "Something Went Wrong",
        });
    }
}

exports.detailedView = async (req, res) => {
    const { id } = req.query
    try {
        const bookDetails = await books.findById(id);
        if (!bookDetails) {
            return response.success(res, {
                statusCode: 404,
                message: "Book not found",
            });
        }
        return response.success(res, {
            statusCode: 200,
            message: "Book Details Fetched Successfully",
            data: bookDetails
        });

    } catch (e) {
        console.log("Error While Fetching Book:", e);
        return response.error(res, {
            statusCode: 500,
            message: "Something Went Wrong",
        });
    }
}


