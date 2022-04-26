const { User } = require('../models');

module.exports = {
  // Get all users
  getUser(req, res) {
    User.find()
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  // Get a user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No User with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a User
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete a User
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.UserId })
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  // Update a User
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },



  addFriend(req, res) {
    User.findOneAndUpdate({ _id: req.params.userId },
      { $addToSet: { friends: req.params.friendsId } },
      { runValidators: true, new: true })
      .then((friends) =>
        !friends
          ? res.status(404).json({ message: 'No friends with this id!' })
          : res.json(friends)
      )
      .catch((err) => res.status(500).json(err));
    },

  deleteFried(req, res) {
    User.findOneAndDelete({ _id: req.params.userId },
      { $pull: { friends: req.params.friendsId } },
      { runValidators: true, new: true })
      .then((friends) =>
      !friends
        ? res.status(404).json({ message: 'No friends with this id!' })
        : res.json(friends)
      )
      .catch((err) => res.status(500).json(err));
  },

}
