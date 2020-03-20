const express = require('express');
const Users = require('./userDb.js');
const router = express.Router();

router.use((req, res, next) =>{
  console.log('userRouter')
})

router.post('/', validateUser,(req, res) => {
  // do your magic!
  const user = req.body
  Users.insert(user)
  .then(user => {
    res.status(201).json(user)
  })
  .catch(err =>{
    res.status(500).json({message: 'Could not add user'})
  })
});

router.post('/:id/posts', (req, res) => {
  // do your magic!
});

router.get('/', (req, res) => {
  // do your magic!
  Users.get()
  .then(user =>{
    res.status(200).json(user)
  })
  .catch(err =>{
    res.status(500).json({message: 'User could not be retrieved'})
  })
});

router.get('/:id', validateUserId, (req, res) => {
  // do your magic!
  res.status(200).json(req.user)
});

router.get('/:id/posts', validateUser, validatePost, (req, res) => {
  // do your magic!
  const {id} = req.params
  Users.getUserPosts(id)
  .then(user =>{
    res.status(200).json(user)
  })
  .catch(err =>{
    res.status(500).json({message:'Could not retrieve the users posts'})
  })
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
