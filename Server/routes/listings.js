var express = require('express');
var router  = express.Router();
const controller = require('../controllers/listing.controller');

router.get('/', controller.getListings);
router.post('/', controller.postListing);
router.get('/:id', controller.getSingleListing);
router.patch('/:id', controller.patchListing);
router.delete('/:id', controller.deleteListing);

module.exports = router;
