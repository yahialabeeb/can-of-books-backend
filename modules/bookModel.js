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

// seedDataCollection();

function seedDataCollection() {
    const Almajreat = new bookModel({
        title: 'Almajreat',
        description:"talkimg about put your attention things you can't change is wrong" ,
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
        description: "Evidences about God exists",
        email:'yahia_labib@hotmail.com',
        status: "next book"
    })
    Almajreat.save();
    Mslkeat.save();
    ShmoaAlnhar.save();
}



module.exports = bookModel;