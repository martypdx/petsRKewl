const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const RequiredString = { type: String, required: true };

const schema = new Schema({
    street: String,
    city: String,
    state: String,
    zip: String
});

module.exports = mongoose.model('Address', schema);