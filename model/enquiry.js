const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema({
    name: {type: String, required: true },
    email: {type: String, required: true},
    course: {type: String, required: true},
    isClaimed: {type: Boolean, default: false},
    claimedBy: {type: String, default: null}
});

module.exports = mongoose.model("enquiry", enquirySchema);