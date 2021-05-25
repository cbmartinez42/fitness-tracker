const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Exercise = new Schema({
    name: {
        type: String,
        trim: true,
    }
})