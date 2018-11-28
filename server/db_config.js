const mongoose = require('mongoose');

let mongodb_path = 'mongodb://localhost/ncnu'
if (process.env.NODE_ENV=='dokcer') 
    mongodb_path = 'mongodb://mongodb/ncnu'

mongoose.connect(mongodb_path, { useNewUrlParser: true }, function(err, db) {
    if (err) {
        console.log('Unable to connect to the server. Please start the server. Error:', err);
    } else {
        console.log('Connected to Server successfully!');
    }
});

const db = mongoose.connection;
const Schema = new mongoose.Schema({});
const Mongo = mongoose.model('Mongo', Schema, 'class');

const fields = {
    _id: 0,
    course_cname: 1,
    course_credit: 1,
    course_id: 1,
    department: 1,
    division: 1,
    faculty: 1,
    location: 1,
    teacher: 1,
    time: 1
};

module.exports = {
    Mongo,
    fields
}