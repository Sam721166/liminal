import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    followers: {
        type: Array,
        default: []
    },
    following: {
        type: Array,
        default: []
    },
    bookmark: {
        type: Array,
        default: [],
    },
    tweetId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "tweet"
    }]

}, {timestamps: true})

export default mongoose.model("user", userSchema)