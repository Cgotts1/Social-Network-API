const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addReaction,
  deleteReaction
  ///api/users/:userId/friends/:friendId
// POST to add a new friend to a user's friend list
// DELETE to remove a friend from a user's friend list
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// /api/users/:userId
router.route('/:userId').get(getUsers).put(updateUser);

module.exports = router;
