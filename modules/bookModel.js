'use strict'

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/books1')

//Schema


const bookFavSchema = new mongoose.Schema({
    title: String,
    description:String,
    email:String,
    status:String
});

// create model
const bookModel = mongoose.model('favorite', bookFavSchema)



function seedDataCollection() {
    const Almajreat = new bookModel({
        title: 'Almajreat',
        description:"the main Idea of the book is putting your attention on things you can't change is wrong" ,
        email:'yahia_labib@hotmail.com',
        status: 'done'
    })

    const Mslkeat = new bookModel({
        title:'Mslkeat' ,
        description:'a book about the ways of eman and scince',
        email:'yahia_labib@hotmail.com',
        status: 'in progress'
    })

    const ShmoaAlnhar = new bookModel({
        title: 'Shmoa Alnhar' ,
        description: "Evidences of God exists",
        email:'yahia_labib@hotmail.com',
        status: "next book"
    })
    Almajreat.save();
    Mslkeat.save();
    ShmoaAlnhar.save();
}
// save it once
// seedDataCollection();

module.exports = bookModel;