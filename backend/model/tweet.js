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
    userId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },]

}, {timestamps: true})

export default mongoose.model("tweet", tweetSchema)