const { Router } = require('express');
const router = Router();

const notesCtrl = require('../controllers/notes.controller');

const { isAuthenticated } = require('../helpers/auth');

// All Notes
router.get('/notes', isAuthenticated, notesCtrl.renderNotes);

// New Note
router.get('/notes/new', isAuthenticated, notesCtrl.renderNewNote);
router.post('/notes/new', isAuthenticated, notesCtrl.newNote);

// Edit Note
router.get('/notes/edit/:id', isAuthenticated, notesCtrl.renderEditNote);
router.put('/notes/edit/:id', isAuthenticated, notesCtrl.editNote);

// Delete Note
router.delete('/notes/delete/:id', isAuthenticated, notesCtrl.deleteNote);

module.exports = router;