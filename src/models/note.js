const {Schema, model} = require('mongoose');

const noteSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    user: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

module.exports = model('note', noteSchema);