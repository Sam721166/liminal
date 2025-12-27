import userModel from "../model/user"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


export const register = async (req, res) => {
    try{
        const {name, username, email, password} = req.body

        if(!name || !username || !email || !password){
            return res.json({
                msg: "All field are required",
                success: false
            })
        }
        const user = await userModel.find(email)
        if(user){
            return res.json({
                msg: "User already exist"
            })
        }

        const hash = await bcrypt.hash(password, 10)
        await userModel.create({
            name: name,
            username: username,
            email: email,
            password: hash
        })
        const token = jwt.sign({email}, process.env.JWT_SECRET)
        res.cookie("token", token)
        return res.json({
            msg: "User created successfully"
        })
    } catch(err){
        console.log("error while creating account", err);
    }
}



export const Login = async (req, res) => {
    const {email, password} = req.body
    if(!email || !password){
        return res.json({
            msg: "All field are required",
            success: false
        })
    }
    const user = await userModel.findOne({email})
    if(!user){
        return res.json({
            msg: "User doesn't exist"
        })
    }
    bcrypt.compare(password, user.password, (err, result) => {
        if(result){
            const token = jwt.sign({email}, process.env.JWT_SECRET, {expiresIn:"1d"})
            res.cookie("token", token, {expiresIn:"1d"})
            return res.json({
                msg: `Login successful, wellcome back ${user.name}`
            })
        } else{
            return res.json({
                msg: "Wrong password"
            })
        }
    })
}



export const Logout = async (req, res) => {
    return res.cookie("token", "")
    return res.json({
        msg: "Logout successfull"
    })
}