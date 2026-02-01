import express from "express"
const tweetRouter = express.Router()
import tweetModel from "../model/tweet.js"
import userModel from "../model/user.js"



// create tweet
tweetRouter.post("/create", async (req, res) => {
    try{
        const user = await userModel.findOne({email: req.user.email})
        const {description} = req.body
        const tweet = await tweetModel.create({
            description: description,
            userId: user._id,
            userDetails: user
        })
        user.tweetId.push(tweet._id)
        await user.save()
        

        return res.status(200).json({
            success: true,
            message: "tweet created successfully",
            tweet: tweet
        })

    } catch(err){
        console.log("Error while creating tweet", err);
    }

})


// get tweet (sort in DB + limit for fast prod response)
tweetRouter.get("/read", async (req, res) => {
    const tweets = await tweetModel
        .find()
        .sort({ createdAt: -1 })
        .limit(200)
        .lean()
    return res.status(200).json({
        success: true,
        tweets
    })
})


// edit tweet
tweetRouter.put("/edit/:id", async (req, res) => {
    const id = req.params.id
    const {description} = req.body
    const tweet = await tweetModel.findByIdAndUpdate(id, req.body, {new: true})
    return res.status(200).json({
        message: "tweet updated successfully",
        tweet: tweet
    })
})


// delete tweet
tweetRouter.delete("/delete/:id", async (req, res) => {
    try{
        const id = req.params.id
        await tweetModel.findByIdAndDelete(id)
        return res.status(200).json({
            message: "tweet deleted successfully"
        })
    } catch(err){ 
        console.log("error while delete tweet", err);
    }
})


// like tweet
tweetRouter.put("/like/:id", async (req, res) => {
    try{
        const loggedInUser = req.body.id 
        const tweetId = req.params.id
        const tweet = await tweetModel.findById(tweetId)
        if(tweet.like.includes(loggedInUser)){
            // dislike
            await tweetModel.findByIdAndUpdate(tweetId, {$pull:{like:loggedInUser}})
            return res.status(200).json({
                message: "User disliked your post"
            })
        } else{
            // like
            await tweetModel.findByIdAndUpdate(tweetId, {$push:{like:loggedInUser}})
            return res.status(200).json({
                message: "User liked your post"
            })
        }
    } catch(err){
        console.log("error while like a tweet", err);
    }
})



// get following tweet (single query with $in instead of N+1)
tweetRouter.get("/alltweets/:id", async (req, res) => {
    try{
        const id = req.params.id
        const loggedInUser = await userModel.findById(id).select("following").lean()
        if (!loggedInUser) return res.status(404).json({ success: false })
        const userIds = [id, ...(loggedInUser.following || [])]
        const tweet = await tweetModel
            .find({ userId: { $in: userIds } })
            .sort({ createdAt: -1 })
            .limit(200)
            .lean()
        return res.status(200).json({
            success: true,
            tweet
        })
    } catch(err){
        console.log("error while getting all tweets", err)
    }
})



// get only my tweet (sort in DB)
tweetRouter.get("/mytweet/:id", async (req, res) => {
    try{
        const id = req.params.id
        const tweet = await tweetModel
            .find({ userId: id })
            .sort({ createdAt: -1 })
            .limit(200)
            .lean()
        return res.status(200).json({
            success: true,
            tweet
        })
    } catch(err){
        console.log("error while getting my tweet: ", err);
    }
})



export default tweetRouter