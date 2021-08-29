const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    name: { type: String, unique: false, required: true },
job: { type: String, unique: false, required: true },
birthday: { type: String, unique: false, required: true },
civil: { type: String, unique: false, required: false },
gender: { type: String, unique: false, required: false },
zip: { type: String, unique: false, required: true },
street: { type: String, unique: false, required: true },
neighbor: { type: String, unique: false, required: true },
town: { type: String, unique: false, required: true },
state: { type: String, unique: false, required: false },
uf: { type: String, unique: false, required: true },
phone1: { type: String, unique: false, required: false },
phone2: { type: String, unique: false, required: false },
cel: { type: String, unique: false, required: true },
contact: { type: String, unique: false, required: false },
email: { type: String, unique: true, required: true },
personal_id: { type: String, unique: false, required: false },
social_id: { type: String, unique: true, required: true },
car: { type: String, unique: false, required: false },
license: { type: String, unique: false, required: false }
}, {
    timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema);