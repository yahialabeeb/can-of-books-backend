"use strict";

const express = require("express");
const cors = require("cors");

require("dotenv").config();
const getBooks = require("./modules/getBooks.js");
const bookModel = require("./modules/bookModel.js");

const PORT = process.env.PORT;
const server = express();
server.use(express.json());
server.use(cors());






const mongoose = require('mongoose')
mongoose.connect(process.env.mongo_link)


//---------------------------------------------------------------------

server.get("/books", getBooks);
server.delete("/deletebook/:bookId", deleteBookHandler);

server.post('/addbook', addBookHandler);
server.put("/updatebook/:bookId", updateBookHandler);

server.get("*", (request, response) => {
  response.status(404).send("not found");
});

async function addBookHandler(req, res) {
  console.log(req.body);


  let { title, description, email, status } = req.body;

  await bookModel.create({ title, description, email, status });

  bookModel.find({ email }, function (err, ownerData) {
    if (err) {
      console.log("error in getting the data");
    } else {
      console.log(ownerData);
      res.send(ownerData);
    }
  });
}

function deleteBookHandler(request, response) {
  console.log("inside the deleteHandler");
  let email1 = request.query.email;
  let bookID = request.params.bookId;
  bookModel.remove({ _id: bookID }, (error, bookData) => {
    if (error) {
      console.log("error in deleting the data");
    } else {
      console.log(bookData);
      bookModel.find({ email: email1 }, (err, ownerData) => {
        if (err) {
          // console.log('error in getting the data')
          response.send("error");
        } else {
          // console.log(ownerData);
          response.send(ownerData);
        }
      });
    }
  });
}

function updateBookHandler(req, res) {
  let { title, description, status } = req.body;
  let bookID = req.params.bookId;
  console.log(req.body)
  bookModel.findOne({ _id: bookID }, (error, bookInfo) => {

    console.log(bookInfo)

    bookInfo.title = title;
    bookInfo.description = description;
    bookInfo.status = status;

    console.log({ bookInfo })
    bookInfo.save()
      .then(() => {
        bookModel.find({ bookID }, function (err, ownerData) {
          if (err) {
            console.log('error in getting the data')
          } else {
            // console.log(ownerData);
            res.send(ownerData)
          }
        })
      }).catch(error => {
        console.log('error in saving ')
      })
  })
}

server.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
});
