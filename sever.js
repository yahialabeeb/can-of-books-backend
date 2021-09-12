'use strict'

const express =require('express')
const cors = require('cors')

require('dotenv').config()
const getBooks = require('./modules/getBooks.js')

const PORT = process.env.PORT;
const server =express();
server.use(cors());

server.get('/books', getBooks);

server.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`)
})

