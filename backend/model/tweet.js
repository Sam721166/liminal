import mongoose from "mongoose";

const tweetSchema = mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    like: {
        type: Array,
        default: []
    },
    bookmark: {
        type: Array,
        default: [],
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "tweet",
    },

}, {timestamps: true})

export default mongoose.model("tweet", tweetSchema)