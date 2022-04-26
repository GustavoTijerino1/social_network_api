const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  addReactions,
  removeReactions,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('/:ThoughtId').get(getSingleThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReactions);

// /api/thoughts/:thoughtId/addReactions/:addReactionId
router.route('/:thoughtId/addReactions/:addReactionId').delete(removeReactions);

module.exports = router;
