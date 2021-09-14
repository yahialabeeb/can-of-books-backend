'use strict'

const mongoose = require('mongoose')


mongoose.connect(process.env.mongolink)


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

