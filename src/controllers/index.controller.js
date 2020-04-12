const indexCtrl = {};

// Principal Page
indexCtrl.renderIndex = (req, res) => {
    res.render('index');
};

module.exports = indexCtrl;