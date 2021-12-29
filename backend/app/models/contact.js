const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const contactSchema = new Schema({
    name: {
        type: String,
        required:true
    },
    phone: {
        type: String, 
        required: true
    } 
});
const contactModel = mongoose.model('contacts', contactSchema);


module.exports = contactModel;