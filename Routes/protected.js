const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");

//Authentication Middleware for protected routes
router.use(auth);

// importing user context
const User = require("../model/user");

//importing enquiry model
const Enquiry = require("../model/enquiry");

//Enquiries
router.get("/enquiries", async (req, res) => {
    try {
        const totalEnquries = await Enquiry.find({ isClaimed: false });
        res.status(201).json(totalEnquries)
    } catch (err) {
        console.log(err);
        res.status(500).json({
            msg: 'Server Error'
        })
    }

})

//Sets the enquiry status isClaimed=true and updates claimedBy: 'emailid'
router.put("/claim/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const record = await Enquiry.findById({ _id: id });
        if (record.isClaimed) return res.status(400).json({ msg: 'This enquiry is already claimed' });

        await Enquiry.updateOne({ _id: id }, {
            isClaimed: true,
            claimedBy: req.user.email
        })

        return res.status(200).json({ msg: `Lead successfully claimed by ${req.user.email}` })

    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Server Error' });
    }

})

//display all leads by counseller
router.get("/leads", async (req, res) => {
    try {
        const enquiriesByUser = await Enquiry.find({ claimedBy: req.user.email });
        res.status(201).json(enquiriesByUser);
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Server Error' });
    }

})

module.exports = router;