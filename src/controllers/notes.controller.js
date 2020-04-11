const notesCtrl = {};
const note = require('../models/note');

// All Notes
notesCtrl.renderNotes = async (req, res) => {
    const notes = await note.find().lean();
    res.render('notes/all-notes', { notes });
};

// New Note
notesCtrl.renderNewNote = (req, res) => {
    res.render('notes/new-note');
};
notesCtrl.newNote = async (req, res) => {
    const {title, description} = req.body;
    const newNote = new note({title, description});
    await newNote.save();
    res.redirect('/notes');
};

// Edit Note
notesCtrl.renderEditNote = async (req, res) => {
    const editNote = await note.findById(req.params.id).lean();
    res.render('notes/edit-note', { editNote });
};
notesCtrl.editNote = async (req, res) => {
    const { title, description } = req.body;
    await note.findByIdAndUpdate(req.params.id, {title, description}).lean();
    res.redirect('/notes');
};

// Delete Note
notesCtrl.deleteNote = async (req, res) => {
    await note.findByIdAndDelete(req.params.id).lean();
    res.redirect('/notes');
};

module.exports = notesCtrl;