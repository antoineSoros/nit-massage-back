const mongoose = require('mongoose');
const Schema = require("mongoose");
const Company = require('./companies.model');

const CustomerSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    address: {
        streetNumber: String,
        streetName: String,
        zipCode: String,
        cityName: String
    },
    profile: String,
    companies:[{type: mongoose.Schema.Types.ObjectId, ref:Company}],


}


, {
    timestamps: true
});

module.exports = mongoose.model('Customer', CustomerSchema);
