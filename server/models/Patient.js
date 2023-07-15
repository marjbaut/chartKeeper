const { Schema, model } = require('mongoose');

const patientSchema = new Schema({
    patientName: {
        type: String,
        required: true,
    },
    patientLastName: {
        type: String,
        required: true,
    },
    patientPhone: {
        type: String,
        minlength: 9,
        maxlength: 10,
        required: true,
    },
    patientBirthdate: {
        type: Date,
        required: true,
    },
    patientEmail: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],

    },
    patientpassword: {
        type: String,
        required: [true, 'Please add a password'],
        minlength: 5,
    },
    role:{
        type: String,
        default: "patient"
    }
})
const Patient = model('User', patientSchema);
module.exports = Patient;