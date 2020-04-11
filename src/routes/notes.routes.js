const { Router } = require('express');
const router = Router();

const notesCtrl = require('../controllers/notes.controller');

// All Notes
router.get('/notes', notesCtrl.renderNotes);

// New Note
router.get('/notes/new', notesCtrl.renderNewNote);
router.post('/notes/new', notesCtrl.newNote);

// Edit Note
router.get('/notes/edit/:id', notesCtrl.renderEditNote);
router.put('/notes/edit/:id', notesCtrl.editNote);

// Delete Note
router.delete('/notes/delete/:id', notesCtrl.deleteNote);

module.exports = router;