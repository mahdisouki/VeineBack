
const mongoose = require('mongoose');
const { Schema } = mongoose;

const clientSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  specialité : {type: String , required : true},
  description: {type:String , required : true },
  patients : [{type : mongoose.Types.ObjectId , ref:"Patient"}]
});

const Doctor = mongoose.model('Doctor', clientSchema);

module.exports = Doctor;