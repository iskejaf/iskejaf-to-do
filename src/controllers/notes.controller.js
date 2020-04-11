const notesCtrl = {};

// All Notes
notesCtrl.renderNotes = (req, res) => {
    res.send('All Notes');
};

// New Note
notesCtrl.renderNewNote = (req, res) => {
    res.render('notes/new-note');
};
notesCtrl.newNote = (req, res) => {
    console.log(req.body);
    res.send('Create new');
};

// Edit Note
notesCtrl.renderEditNote = (req, res) => {
    res.send('Edit Note');
};
notesCtrl.editNote = (req, res) => {
    res.send('edit');
};

// Delete Note
notesCtrl.deleteNote = (req, res) => {
    res.send('edit');
};

module.exports = notesCtrl;