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
            userId: user._id
        })
        user.tweetId.push(tweet._id)
        await user.save()

        return res.json({
            msg: "tweet created successfully",
            todo: tweet
        })

    } catch(err){
        console.log("Error while creating tweet", err);
    }

})


// get tweet 
tweetRouter.get("/read", async (req, res) => {
    const tweet = await tweetModel.find()
    return res.json(tweet)
})


// edit tweet
tweetRouter.put("/edit/:id", async (req, res) => {
    const id = req.params.id
    const {description} = req.body
    const tweet = await tweetModel.findByIdAndUpdate(id, req.body, {new: true})
    return res.json({
        msg: "tweet updated successfully",
        tweet: tweet
    })
})


// delete tweet
tweetRouter.delete("/delete/:id", async (req, res) => {
    try{
        const id = req.params.id
        await tweetModel.findByIdAndDelete(id)
        return res.json({
            msg: "tweet deleted successfully"
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
            return res.json({
                msg: "User disliked your post"
            })
        } else{
            // like
            await tweetModel.findByIdAndUpdate(tweetId, {$push:{like:loggedInUser}})
            return res.json({
                msg: "User liked your post"
            })
        }
    } catch(err){
        console.log("error while like a tweet", err);
    }
})





export default tweetRouter