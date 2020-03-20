const express = require('express');
const userRouter = require('./users/userRouter.js');
const server = express();


//Global middleware 
const morgan = require('morgan');
const helmet = require('helmet');
server.use(logger);//pass a reference to it
server.use(express.json());
server.use(helmet());//security middleware
// server.use(morgan('dev'))// put this in just for practice records every request~ not safe can be hacked
server.use('/api/users', userRouter);


server.get('/', (req, res) =>{
    res.send('<h1>Yo waddup</h1>');
});

function logger(req,res,next){
  const method = req.method;

  console.log(`${method} Request`);
  next();//moves the request to the next middleware
}
module.exports = server;