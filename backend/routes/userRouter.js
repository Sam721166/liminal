import express from "express"
const userRouter = express.Router()
import userModel from "../model/user.js"
import tweetModel from "../model/tweet.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


// signup
userRouter.post("/signup", async (req, res) => {
    try{
        const {name, username, email, password} = req.body

        if(!name || !username || !email || !password){
            return res.status(400).json({
                success:false,
                message: "All field are required"
            })
        }
        const user = await userModel.findOne({email})
        if(user){
            return res.status(409).json({
                message: "User already exist",
                success: false
            })
        }
        const preUsername = await userModel.findOne({username})
        if(preUsername){
            return res.status(409).json({
                success: false,
                message: "username is already taken, use different usernames"
            })
        }

        const hash = await bcrypt.hash(password, 10)
        await userModel.create({
            name: name,
            username: username,
            email: email,
            password: hash
        })
        const token = jwt.sign({email: req.body.email}, process.env.JWT_SECRET)
        res.cookie("token", token)
        return res.status(201).json({
            success: true,
            message: "Account created successfully"
        })
    } catch(err){
        console.log("error while creating account", err);
    }
})


// login
userRouter.post("/login", async (req, res) => {
const {email, password} = req.body
    if(!email || !password){
        return res.status(400).json({
            message: "All field are required",
            success: false
        })
    }
    const user = await userModel.findOne({email})
    if(!user){
        return res.status(404).json({
            success: false,
            message: "User doesn't exist"
        })
    }
    bcrypt.compare(password, user.password, (err, result) => {
        if(result){
            const token = jwt.sign({email}, process.env.JWT_SECRET, {expiresIn:"1d"})
            res.cookie("token", token, {expiresIn:"1d"})
            return res.status(200).json({
                success: true,
                user: user,
                message: `Login successful, wellcome back ${user.name}`
            })
        } else{
            return res.status(401).json({
                success: false,
                message: "Wrong password"
            })
        }
    })
})


// logout
userRouter.post("/logout", (req, res) => {
    res.cookie("token", "")
    return res.status(200).json({
        success: true,
        message: "logout successful"
    })
})


// get my profile
userRouter.get("/profile/:id", async (req, res) => {
    try{
        const id = req.params.id
        const user = await userModel.findById(id)
        return res.status(200).json({
            success: true,
            user: user
        })
    } catch(err){
        console.log("error while getting profile", err);
    }
})



// get other profile
userRouter.get("/otheruser/:id", async (req, res) => {
    try{
        const userId = req.params.id
        const otherUser = await userModel.find({_id:{$ne:userId}}).select("-password")
        if(!otherUser){
            return res.status(200).json({
                success: true,
                message: "currently no other users"
            })
        }
        return res.status(200).json({
            success: true,
            otherUser: otherUser
        })
    } catch(err){
        console.log("error while getting other all profile", err);
    }
})



// bookmark tweet
userRouter.put("/bookmark/:id", async (req, res) => {
    try{
        const loggedInUser = req.body.id
        const tweetId = req.params.id
        const user = await userModel.findById(loggedInUser)
        if(user.bookmark.includes(tweetId)){
            // not bookmark
            await userModel.findByIdAndUpdate(loggedInUser, {$pull:{bookmark:tweetId}})
            return res.status(200).json({
                success:true,
                message: "User not bookmarked your post"
            })
        } else{
            // bookmark
            await userModel.findByIdAndUpdate(loggedInUser, {$push:{bookmark:tweetId}})
            return res.status(200).json({
                success:true,
                message: "User bookmarked your post"
            })
        }
    } catch(err){
        console.log("error while bookmark a tweet", err);
    }
})


// get bookmark tweet
userRouter.get("/getbookmark/:id", async (req, res) => {
    try{
        const id = req.params.id
        const user = await userModel.findById(id)
        
        const bookmarkedTweets = await tweetModel.find({
            _id: { $in: user.bookmark }
        })

        return res.status(200).json({
            success: true,
            tweet: bookmarkedTweets
        })
    } catch (err){
        console.log("error while get bookmark: ", err);
    }
})



// follow & unfollow
userRouter.put("/follow/:id", async (req, res) => {
    try{
        const loggedInUserId = req.body.id
        const userId = req.params.id
        const loggedInUser = await userModel.findById(loggedInUserId)
        const user = await userModel.findById(userId)
        if(!user.followers.includes(loggedInUserId)){
            await userModel.findByIdAndUpdate(userId, {$push:{followers:loggedInUserId}})
            await userModel.findByIdAndUpdate(loggedInUserId, {$push:{following:userId}})
            return res.status(200).json({
                success:true,
                message: `${loggedInUser.name} just followed to ${user.name}`
            })
        } else{
            await userModel.findByIdAndUpdate(userId, {$pull:{followers:loggedInUserId}})
            await userModel.findByIdAndUpdate(loggedInUserId, {$pull:{following:userId}})
            return res.status(200).json({
                success:true,
                message: `${loggedInUser.name} just unfollowed to ${user.name}`
            })
        }
    } catch(err){
        console.log("error while follow", err);
    }
})





export default userRouter