const {Schema, model} = require('mongoose');
const bcrypy = require('bcryptjs');

const userSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

userSchema.methods.encryptPassword = async password => {
    const salt = await bcrypy.genSalt(10);
    return await bcrypy.hash(password, salt);
};

userSchema.methods.matchPassword = async function(password) {
    return await bcrypy.compare(password, this.password);
};

module.exports = model('user', userSchema);