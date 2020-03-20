const express = require('express');
const userRouter = require('./users/userRouter.js');

const server = express();
server.use(express.json());

server.get('/', (req, res) =>{
    res.send('<h1>Yo waddup</h1>');
});
server.use(logger);
server.use('/users', userRouter);

function logger(req,res,next){
    
}
module.exports = server;