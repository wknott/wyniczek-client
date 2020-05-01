const express = require('express')
const router = express.Router()
const User = require('../models/user')
const userService = require('../services/users');

router.post('/authenticate', authenticate);
router.post('/register', register);

function authenticate(req, res, next) {
  userService.authenticate(req.body)
    .then(user => user ? res.json(user) : res.status(400).json({ message: 'Nazwa użytkownika albo hasło jest niepoprawne.' }))
    .catch(err => next(err));
}

function register(req, res, next) {
  userService.create(req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

router.get('/', async (req, res) => {
try {
  const users = await User.find()
  res.json(users)
  } catch (err) {
    res.status(500).json({message: err.message})
  } 
})

router.get('/:id', getUser, (req, res) => {
  res.json(res.user)
})

// router.post('/', async (req,res) => {
//   const user = new User({name: req.body.name})
//   try {
//     const newUser = await user.save()
//     res.status(201).json(newUser)
//   } catch (err) {
//     res.status(400).json({message: err.message})
//   }
// })

// router.patch('/:id', getUser, async (req,res) => {
//   if (req.body.name != null) {
//     res.user.name = req.body.name
//   }
//   try {
//     const updatedUser = await res.user.save()
//     res.json(updatedUser)
//   } catch (err) {
//     res.status(400).json({message: err.message})
//   }
// })
// router.delete('/:id', getUser, async (req,res) => {
//   try {
//     await res.user.remove()
//     res.json({message: 'Deleted user'})
//   } catch (err) {
//     res.json(500).json({message: err.message})
//   }
// })

async function getUser(req, res, next) {
  let user
  try {
    user = await User.findById(req.params.id)
    if (user == null) {
       return res.status(404).json('Cannot find user')
    }
  } catch (err) {
    return res.status(500).json({message: err.message})
  }
  res.user = user
  next()
}
module.exports = router