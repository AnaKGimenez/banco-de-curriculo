const Candidate = require('../models/Candidate');


module.exports = {
    async register(req, res) {

        const { name, job, birthday, civil, gender, zip, street, neighbor,
            town, state, uf, phone1, phone2, cel, contact, email,
            personal_id, social_id, car, license
        } = req.body;

        const newCandidate = new Candidate();

        newCandidate.name = name;
        newCandidate.job = job;
        newCandidate.birthday = birthday;
        newCandidate.civil = civil;
        newCandidate.gender = gender;
        newCandidate.zip = zip;
        newCandidate.street = street;
        newCandidate.neighbor = neighbor;
        newCandidate.town = town;
        newCandidate.state = state;
        newCandidate.uf = uf;
        newCandidate.phone1 = phone1;
        newCandidate.phone2 = phone2;
        newCandidate.cel = cel;
        newCandidate.contact = contact;
        newCandidate.email = email;
        newCandidate.personal_id = personal_id;
        newCandidate.social_id = social_id;
        newCandidate.car = car;
        newCandidate.license = license;

        newCandidate.save((err, savedCandidate) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Problema no banco!');
            }

            return res.status(200).send(savedCandidate);
        });
    },
};