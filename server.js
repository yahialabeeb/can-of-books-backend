'use strict'

const express =require('express')
const cors = require('cors')

require('dotenv').config()
const getBooks = require('./modules/getBooks.js')

const PORT = process.env.PORT;
const server =express();
server.use(cors());

server.get('/books', getBooks);
server.get('*', (request, response) => {
    response.status(404).send('not found');
})

server.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`)
})

