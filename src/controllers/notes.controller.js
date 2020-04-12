const notesCtrl = {};
const note = require('../models/note');

// All Notes
notesCtrl.renderNotes = async (req, res) => {
    const notes = await note.find({user: req.user.id}).sort({createdAt: 'desc'}).lean();
    res.render('notes/all-notes', { notes });
};

// New Note
notesCtrl.renderNewNote = (req, res) => {
    res.render('notes/new-note');
};
notesCtrl.newNote = async (req, res) => {
    const {title, description} = req.body;
    const newNote = new note({title, description});
    newNote.user = req.user.id;
    await newNote.save();
    req.flash('success_msg', 'Nota Agregada correctamente');
    res.redirect('/notes');
};

// Edit Note
notesCtrl.renderEditNote = async (req, res) => {
    const editNote = await note.findById(req.params.id).lean();
    if (editNote.user != req.user.id) {
        req.flash('error', 'No Autorizado');
        return res.redirect('/notes')
    }
    res.render('notes/edit-note', { editNote });
};
notesCtrl.editNote = async (req, res) => {
    const { title, description } = req.body;
    await note.findByIdAndUpdate(req.params.id, {title, description});
    req.flash('success_msg', 'Nota Actualizada correctamente');
    res.redirect('/notes');
};

// Delete Note
notesCtrl.deleteNote = async (req, res) => {
    await note.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Nota Eliminada correctamente');
    res.redirect('/notes');
};

module.exports = notesCtrl;