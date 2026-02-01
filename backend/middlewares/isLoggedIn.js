import jwt from "jsonwebtoken"

const isLoggedIn = async (req, res, next) => {
    const token = req.cookies.token 
    
    if(!token){
        return res.status(401).json({
            msg: "You need to login at first"
        })
    } else{
        try{
            const data = jwt.verify(token, process.env.JWT_SECRET)
            req.user = data
            next()
        } catch(err){
            console.log("Error in is logged in middleware");
        }
    }
}

export {isLoggedIn}