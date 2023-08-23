const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');

// GET /api/items
//router.get('/', notesCtrl.create);
// GET /api/items/:id
router.get('/:userId', notesCtrl.index);

module.exports = router;
