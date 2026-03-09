const mongoose = require("mongoose")

const transactionSchema = new mongoose.Schema ({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    title : {
        type: String,
        required: true
    },
    amount : {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
        enum : ["Food", "Travel", "Shopping", "Bills", "Others"],
    },
    date : {
        type: Date,
        required: true,
        default: Date.now
    },

    notes : {
        type: String
    },

},
{timestamp: true}
);

module.exports = mongoose.model("Transaction", transactionSchema)