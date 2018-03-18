var express = require('express');
var router  = express.Router();
const controller = require('../controllers/user.controller');

router.get('/:id', controller.getUser);
router.patch('/:id', controller.patchUser);
router.delete('/:id', controller.deleteUser);

module.exports = router;
