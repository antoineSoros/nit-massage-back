const mongoose = require('mongoose');

const CompanySchema = mongoose.Schema({
    name:{type:String, required: true, index: {unique: true}},
    address: {
        streetNumber:{type: String},
        streetName:{type: String},
        zipCode:{type: String},
        cityName:{type: String}
    },
    phone: {type: String},
    email: {type: String},
});

module.exports = mongoose.model('Company', CompanySchema);
