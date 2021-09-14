"use strict";

const express = require("express");
const cors = require("cors");

require("dotenv").config();
const getBooks = require("./modules/getBooks.js");

const PORT = process.env.PORT;
const server = express();
server.use(cors());

server.get("/books", getBooks);
server.get("*", (request, response) => {
  response.status(404).send("not found");
});

server.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
});
server.delete("/deleteBook/:_Id", deleteBookHandler);

function deleteBookHandler(request, response) {
  let email = request.query.email;
  let bookID = request.params._id;
  bookModel.remove({ _id: bookID }, (error, bookData) => {
    if (error) {
      console.log("error in deleteing the data");
    } else {
      bookModel.find({ email }, function (err, bookData) {
        if (err) {
          console.log("error in getting the data");
        } else {
          res.send(bookData);
        }
      });
    }
  });
}
