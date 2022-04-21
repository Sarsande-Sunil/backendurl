const express = require("express");

const User = require("../models/user.schema");

const router = express.Router();

router.post("/", async (req, res) => {
    try {
    let user = await User.create(req.body);
        res.status(201).send(user);
    }
    catch (err) {
        console.log(err)
    }
})

router.get("/", async (req, res) => {
    try {
    let user = await User.find().lean().exec();
    res.status(200).send(user);
    }
    catch (err) {
        console.log(err);
    }
})

module.exports = router;