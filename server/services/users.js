const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user')

module.exports = {
  authenticate,
  create,
  getAll,
  getById,
};

async function authenticate({ username, password }) {
  const user = await User.findOne({ name: username });
  if (user) {
    if (!user.hash && password) {
      user.hash = bcrypt.hashSync(password, 10);
      await user.save();
    }
    else {
      if (!bcrypt.compareSync(password, user.hash)) {
        return;
      }
    }
          
    const token = jwt.sign({ sub: user.id }, process.env.JWT_SECRET);
    return {
      ...user.toJSON(),
      token
    };
  }
}

async function create(userParam) {
  if (await User.findOne({ name: userParam.name })) {
    throw 'Użytkownik o nazwie "' + userParam.name + '" już istnieje.';
  }

  const user = new User(userParam);

  if (userParam.password) {
    user.hash = bcrypt.hashSync(userParam.password, 10);
  }

  await user.save();
}

async function getAll() {
  return await User.find();
}

async function getById(id) {
    return await User.findById(id);
}

// async function update(id, userParam) {
//     const user = await User.findById(id);

//     // validate
//     if (!user) throw 'Nie znaleziono użytkownika o podanym identyfikatorze.';
//     // if (user.username !== userParam.username && await User.findOne({ username: userParam.username })) {
//     //     throw 'Username "' + userParam.username + '" is already taken';
//     // }

//     if (user.username !== userParam.username)
//       throw 'Nie można zmieniać nazwy użytkownika.'

//     // hash password if it was entered
//     if (userParam.password) {
//         userParam.hash = bcrypt.hashSync(userParam.password, 10);
//     }

//     // copy userParam properties to user
//     Object.assign(user, userParam);

//     await user.save();
// }

// async function _delete(id) {
//     await User.findByIdAndRemove(id);
// }