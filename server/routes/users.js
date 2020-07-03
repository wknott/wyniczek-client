const express = require('express')
const router = express.Router()
const userService = require('../services/users');

router.post('/authenticate', authenticate);
router.post('/register', register);
router.get('/', getAll);
router.get('/:id', getById);
//router.put('/:id', update);

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

// function update(req, res, next) {
//   userService.update(req.params.id, req.body)
//       .then(() => res.json({}))
//       .catch(err => next(err));
// }

function getAll(req, res, next) {
  userService.getAll()
    .then(users => res.json(users))
    .catch(err => next(err));
}

function getById(req, res, next) {
  userService.getById()
  .then(user => user ? res.json(user) : res.status(400).json({ message: 'Nie znaleziono użytkownika.' }))
  .catch(err => next(err))
}

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

module.exports = router