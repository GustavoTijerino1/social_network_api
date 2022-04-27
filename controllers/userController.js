const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models')

/* ===================+============== User Section ===================================== */

async function getUsers(req, res) {
  try {
    const allUsers = await User.find()
    return res.json(allUsers)
  } catch (err) {
    console.error(err);
    return res.status(500).json(err)
  }
}

async function createUser(req, res) {
  try {
    const newUser = await User.create(req.body)
    return res.json(newUser)
  } catch (err) {
    return res.status(500).json(err)
  }
}

async function getUserById(req, res) {
  try {
    const user = await User.findById(req.params.userId)
    return res.json(user)
  } catch (err) {
    return res.status(500).json(err)
  }
}

async function updateUserById(req, res) {
  try {
    const updUser = await User.updateOne(
      { _id: req.params.userId},
      req.body,
      {runValidators: true, new: true}
    )
    return res.json(updUser)
  } catch (err) {
    console.error(err);
    return res.status(500).json(err)
  }
}

async function deleteUserById(req, res) {
  try {
    const delUser = await User.deleteOne({ _id: req.params.userId})
    return res.json(delUser)
  } catch (err) {
    return res.status(500).json(err)
  }
}

/* ===================+============== Friend Section ===================================== */

async function addFriendById(req, res) {
  try {
    const updUser = await User.findByIdAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { new: true }
    )
    return res.json(updUser)
  } catch (err) {
    return res.status(500).json(err)
  }
}

async function deleteFriendById(req, res) {
  try {
    const updUser = await User.findByIdAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )
    return res.json(updUser)
  } catch (err) {
    return res.status(500).json(err)
  }
}

// Export all functions
module.exports = {
  getUsers,
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
  addFriendById,
  deleteFriendById
}