'use strict'

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/books1')

const bookModel = require('./bookModel.js')

let arrr = [{"_id": "613e3080687ac47db2ef4a64",
"title": "Almajreat",
"description": "the main Idea of the book is putting your attention on things you can't change is wrong",
"email": "yahia_labib@hotmail.com",
"status": "done",
"__v": 0
},
{"_id": "613e3080687ac47db2ef4a65",
"title": "Mslkeat",
"description": "a book about the ways of eman and scince",
"email": "yahia_labib@hotmail.com",
"status": "in progress",
"__v": 0
},
{"_id": "613e3080687ac47db2ef4a66",
"title": "Shmoa Alnhar",
"description": "Evidences of God exists",
"email": "yahia_labib@hotmail.com",
"status": "next book",
"__v": 0
}
]

function getBooks(req,res) {
    res.send(arrr)
    // let email1 = req.query.email;
    // bookModel.find({email:email1},function(err,ownerData){
    //     if(err) {
    //         // console.log('error in getting the data')
    //         res.send("error")
    //     } else {
    //         // console.log(ownerData);
    //         res.send(ownerData)
    //     }
    // })
}
module.exports = getBooks;
