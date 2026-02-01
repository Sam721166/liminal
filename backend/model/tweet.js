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
    }],
    userDetails: [],

}, {timestamps: true})

// Indexes for fast queries in prod (find by userId, sort by createdAt)
tweetSchema.index({ userId: 1, createdAt: -1 })
tweetSchema.index({ createdAt: -1 })

export default mongoose.model("tweet", tweetSchema)