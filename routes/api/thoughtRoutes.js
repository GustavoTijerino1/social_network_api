const router = require('express').Router();

const C = require('../../controllers/thoughtController')

router.route('/').get(C.getThoughts)

router.route('/create/:userId').post(C.createThought)

router.route('/:thoughtId').get(C. getSingleThought).put(C.updateThought).delete(C.deleteThought)

router.route('/:thoughtId/reactions').post(C.addReactions)

router.route('/:thoughtId/reactions/:reactionId').delete(C.removeReactions)

module.exports = router;