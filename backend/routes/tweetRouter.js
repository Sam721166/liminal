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


// get tweet 
tweetRouter.get("/read", async (req, res) => {
    const tweets = await tweetModel.find()
    return res.status(200).json({
        success: true,
        tweets: tweets.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
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



// get following tweet
tweetRouter.get("/alltweets/:id", async (req, res) => {
    try{
        const id = req.params.id
        const loggedInUser = await userModel.findById(id)
        const loggedInUserTweet = await tweetModel.find({userId:id})
        const followingTweets = await Promise.all(loggedInUser.following.map((otherUsersId) => {
            return tweetModel.find({userId:otherUsersId})
        }))


        return res.status(200).json({
            success:true,
            tweet: loggedInUserTweet.concat(...followingTweets).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        })
    } catch(err){
        console.log("error while getting all tweets", err)
    }
})



// get only my tweet
tweetRouter.get("/mytweet/:id", async (req, res) => {
    try{
        const id = req.params.id
        const loggedInUser = await userModel.findById(id)
        const loggedInUserTweet = await tweetModel.find({userId:id})

        return res.status(200).json({
            success: true,
            tweet: loggedInUserTweet.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        })
    } catch(err){
        console.log("error while getting my tweet: ", err);
    }
})



export default tweetRouter