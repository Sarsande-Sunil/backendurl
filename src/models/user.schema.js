const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const UserSchemas = new mongoose.Schema({
    userId: { type: Number, require: true },
    id: { type: Number, require: true },
    title: { type: String, require: true },
    body:{type:String,require:true}
});

module.exports = mongoose.model("User", UserSchemas);

// export this file on controllers 
00000000000000000