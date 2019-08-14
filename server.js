const express = require('express');

const server = express();

server.use(express.json());

//express.json is a function (method) that returns middleware

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

//custom middleware

function logger(req, res, next) {

};

module.exports = server;
