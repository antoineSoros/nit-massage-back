const Company = require('../models/companies.model');
const Customer = require('../models/customers.model');

exports.create = (req,res) => {
  if(!req.body){
      res.status(400).send({message:'Empty body'})
  }
  const companyIds = [];
    if(req.body.company){
        const company = new Company({
        name: req.body.company.name,
        address:{
            streetNumber: req.body.company.address.streetNumber,
            streetName: req.body.company.address.streetName,
            zipCode: req.body.company.address.zipCode,
            cityname: req.body.company.address.cityname
        },
        phone: req.body.company.phone,
        email:req.body.company.email
        });
        company.save();
        companyIds.push(company._id);
    }
    const customer = new Customer();




};
