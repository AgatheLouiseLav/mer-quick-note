const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');


router.post('/', notesCtrl.create);

router.get('/:userId', notesCtrl.index);

module.exports = router;
