const router = require('express').Router();

const C = require('../../controllers/userController')

router.route('/').get(C.getUsers).post(C.createUser)

router.route('/:userId').get(C.getUserById).put(C.updateUserById).delete(C.deleteUserById)

router.route('/:userId/friends/:friendId').post(C.addFriendById).delete(C.deleteFriendById)

module.exports = router;