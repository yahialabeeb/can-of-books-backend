'use strict'

const mongoose = require('mongoose')

mongoose.connect(mongolink)
// 'mongodb://localhost:27017/books1'
const bookModel = require('./bookModel.js')



function getBooks(req,res) {
    
    let email1 = req.query.email;
    bookModel.find({email:email1},function(err,ownerData){
        if(err) {
            console.log('error in getting the data')
            res.send("error")
        } else {
            console.log(ownerData);
            res.send(ownerData)
        }
    })
}
module.exports = getBooks;

//mongodb://yahia:<Y12345>@yahia-db-shard-00-00.e3jkm.mongodb.net:27017,yahia-db-shard-00-01.e3jkm.mongodb.net:27017,yahia-db-shard-00-02.e3jkm.mongodb.net:27017/bookslib?ssl=true&replicaSet=atlas-8jktol-shard-0&authSource=admin&retryWrites=true&w=majority
