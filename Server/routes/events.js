var express = require('express');
var router  = express.Router();
const controller = require('../controllers/event.controller')

router.get('/', controller.getEvents);
router.post('/', controller.postEvent);
router.get('/:id', controller.getSingleEvent);
router.patch('/:id', controller.patchEvent);
router.delete('/:id', controller.deleteEvent);

module.exports = router;
