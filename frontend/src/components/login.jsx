import React from "react";
import { useState } from "react";
import axios from "axios"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUser } from "../redux/userSlice";

function Login() {

    const [isLoggedin, setIsLoggedin] = useState(true)

    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const loginHandler = () => {
        setIsLoggedin(!isLoggedin)
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        if(isLoggedin){
            try{
                // login
                const res = await axios.post("/api/user/login", {email, password}, { withCredentials: true })
                console.log(res.data);
                
                dispatch(getUser(res?.data?.user))
                
                if(res.data.success){
                    toast.success(res.data.message)
                    navigate("/")
                }

            } catch(err){
                console.log("error while sign up in frontend: ", err);
                toast.error(err.response.data.message)
            }
        } else{
            try{
                // signup
                const res = await axios.post("/api/user/signup", {name, username, email, password}, { withCredentials: true })

                if(res.data.success){
                    toast.success(res.data.message)
                    setIsLoggedin(true) 
                } 

            } catch(err){
                console.log("error while log in in frontend: ", err);
                toast.error(err.response.data.message)
                
            }
        }
        
        
    }












  return (
    <div className="bg-neutral-900 w-full h-screen flex overflow-hidden selection:bg-lime selection:text-black">
      <div className="w-[50%] h-full p-10 relative">
        <div className=" rounded-2xl   ">
          <img
            src="./gradiant3.jpg"
            alt=""
            className="w-full h-160 mask-b-from-70% rounded-2xl"
          />
        </div>

        <div className="flex flex-col absolute left-28 top-65">
          <h1 className="font-gothic text-8xl text-lime-300 ">Where</h1>
          <h1 className="font-gothic text-6xl text-lime-300">Conversations</h1>
          <h1 className="font-gothic text-5xl text-lime-300">Begin.</h1>
        </div>
      </div>



      <div className="w-[50%] h-full flex items-center mt-30 text-white flex-col ">
        <h1 className="font-gothic text-6xl text-lime mb-10">{isLoggedin ? "Login" : "Sign Up"}</h1>

        <form onSubmit={submitHandler} action="">

            {
                !isLoggedin ? (
                    <div>
                        <div className=" relative border-2 border-neutral-700 focus-within:border-lime bg-neutral-800  w-110 rounded-xl h-15 mb-5">
                            <input
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                placeholder="Name"
                                type="text"
                                className=" absolute  text-white outline-none border-none border-2 mb-10 rounded-xl w-100 h-14 placeholder:text-neutral-600 font-gothic px-5 text-lg "
                        />
                        </div>

                        <div className=" relative border-2 border-neutral-700 focus-within:border-lime bg-neutral-800  w-110 rounded-xl h-15 mb-5">
                        <input
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            placeholder="Username"
                            type="text"
                            className=" absolute  text-white outline-none border-none border-2 mb-10 rounded-xl w-100 h-14 placeholder:text-neutral-600 font-gothic px-5 text-lg "
                        />
                        </div>
                    </div>
                ) : (
                    <div></div>
                )
            }
            

            <div className=" relative border-2 border-neutral-700 focus-within:border-lime bg-neutral-800  w-110 rounded-xl h-15 mb-5">
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Email"
                    required
                    type="email"
                    className=" absolute  text-white outline-none border-none border-2 mb-10 rounded-xl w-100 h-14 placeholder:text-neutral-600 font-gothic px-5 text-lg "
                />
            </div>


            <div className=" relative border-2 border-neutral-700 focus-within:border-lime bg-neutral-800  w-110 rounded-xl h-15">
            <input
                onChange={(e) => setpassword(e.target.value)}
                value={password}
                required
                placeholder="Password"
                type="text"
                className=" absolute  text-white outline-none border-none border-2 mb-10 rounded-xl w-100 h-14 placeholder:text-neutral-600 font-gothic px-5 text-lg "
            />
            </div>


            <div>
                <button className="mt-10 w-110 h-14 bg-lime active:scale-98 rounded-lg font-gothic text-2xl cursor-pointer hover:bg-lime-200 transition-all duration-200 text-black">
                    {isLoggedin ? "Login" : "Sign Up"}
                </button>

                <h1 className="mt-3 text-neutral-500 font-gothic text-sm">{isLoggedin ? "Do not have anaccount?" : "Already have an account? "}<span onClick={loginHandler} className="text-lime cursor-pointer ml-2">{isLoggedin ? "Sign Up" : "Login"}</span></h1>
            </div>
        </form>
        


      </div>
    </div>
  );
}

export default Login;
