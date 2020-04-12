const mongoose = require('mongoose');

const { MONGODB_ISKEJAF_TO_DO_HOST, MONGODB_ISKEJAF_TO_DO_DATABASE } = process.env;
const MONGODB_URI = `mongodb://${MONGODB_ISKEJAF_TO_DO_HOST}/${MONGODB_ISKEJAF_TO_DO_DATABASE}`;

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));