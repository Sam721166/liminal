import { MdHome } from "react-icons/md";
import { FaHashtag } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { FaBookmark } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import { useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { getUser, getOtherUsers, getMyProfile } from "../redux/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import axios from "axios";
import toast from "react-hot-toast";


function LeftSidebar() {

    const [click, setClick] = useState("home")
    
    const handleClick = (newClick) => {
        document.documentElement.classList.remove(
        "home",
        "explore",
        "notification",
        "profile",
        "bookmark",
        "settings"
        );
        document.documentElement.classList.add(newClick);
        setClick(newClick);
    };


    const {user} = useSelector(store => store.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const logoutHandler = async () => {
        try{
            const res = await axios.post(`/api/user/logout`)
            toast.success(res.data.message)
            dispatch(getUser(null))
            dispatch(getMyProfile(null))
            dispatch(getOtherUsers(null))
            navigate('/login')
        } catch(err){
            console.log("error while logout: ", err);
        }
    }



  return (
    <div className="bg-neutral-900 w-105 h-screen pl-12 px-8 py-8 flex flex-col gap-5 ">

        <Link to={`/profile/${user?._id}`}>
            <div onClick={() => setClick("profile")} className="w-full h-27 rounded-xl px-5 flex gap-3 items-center  cursor-pointer mb-4 text-white hover:bg-neutral-700 bg-neutral-800 transition-all duration-100 active:scale-99 ">
                <div>
                    <img src="/sam2.jpg" alt="" className="rounded-full size-18 border-3 border-lime lime:border-lime yellow:border-yellow indigo:border-indigo red:border-red rose:border-rose orange:border-orange purple:border-purple" />
                </div>
                <div>
                    <h1 className=" text-2xl font-gothic">{user?.name}</h1>
                    <p className="text-neutral-500 font-semibold text-sm ">@{user?.username}</p>
                </div>
            </div>
        </Link>

        <div>
            
            <Link to="/">
            
                <div onClick={() => handleClick("home")} className={` rounded-xl p-5 h-15 flex items-center  gap-3 cursor-pointer transition-all duration-200 active:scale-99 border-2 ${click === "home" ? "bg-lime lime:bg-lime yellow:bg-yellow indigo:bg-indigo red:bg-red rose:bg-rose orange:bg-orange purple:bg-purple  border-lime lime:border-lime yellow:border-yellow indigo:border-indigo red:border-red rose:border-rose orange:border-orange purple:border-purple text-black hover:bg-none" : "hover:bg-neutral-800 text-white border-neutral-700 "} `}>
                    <MdHome className="size-7 "/>
                    <h1 className="text-[20px] font-gothic"  >Home</h1>
                </div>
            </Link>
        </div>

        




        <div>
            <Link to={`/profile/${user?._id}`} >
                <div onClick={() => handleClick("profile")} className={`  rounded-xl p-5 h-15 flex items-center gap-3 cursor-pointer transition-all duration-200 active:scale-99  border-2 ${click === "profile" ? "bg-lime lime:bg-lime yellow:bg-yellow indigo:bg-indigo red:bg-red rose:bg-rose orange:bg-orange purple:bg-purple  border-lime lime:border-lime yellow:border-yellow indigo:border-indigo red:border-red rose:border-rose orange:border-orange purple:border-purple text-black hover:bg-none" : " text-white border-neutral-700  hover:bg-neutral-800 "}`}>

                    <MdAccountCircle className="size-8 "/>
                    <h1 className="text-[23px] font-gothic"  >Profile</h1>
                </div>
            </Link>
        </div>

        
        
        <Link to="/bookmark">
            <div>
                <div onClick={() => handleClick("bookmark")} className={` rounded-xl p-5 h-15 flex items-center  gap-3 cursor-pointer transition-all duration-200 active:scale-99  border-2   ${click === "bookmark" ? "bg-lime lime:bg-lime yellow:bg-yellow indigo:bg-indigo red:bg-red rose:bg-rose orange:bg-orange purple:bg-purple  border-lime lime:border-lime yellow:border-yellow indigo:border-indigo red:border-red rose:border-rose orange:border-orange purple:border-purple text-black hover:bg-none" : " border-neutral-700 text-white hover:bg-neutral-800 "}`}>
                    <FaBookmark className="size-5.5 "/>
                    <h1 className="text-[23px] font-gothic"  >Bookmarks</h1>
                </div>
            </div>
        </Link>
        
        
        
        
        <Link to="/settings">
            <div>
                <div onClick={() => handleClick("settings")} className={` rounded-xl p-5 h-15 flex items-center  gap-3 cursor-pointer transition-all duration-200 active:scale-99  border-2   ${click === "settings" ? "bg-lime lime:bg-lime yellow:bg-yellow indigo:bg-indigo red:bg-red rose:bg-rose orange:bg-orange purple:bg-purple  border-lime lime:border-lime yellow:border-yellow indigo:border-indigo red:border-red rose:border-rose orange:border-orange purple:border-purple text-black hover:bg-none" : " border-neutral-700 text-white hover:bg-neutral-800 "}`}>
                    <IoMdSettings className="size-7 "/>
                    <h1 className="text-[23px] font-gothic"  >Settings</h1>
                </div>
            </div>
        </Link>
        
        

        <div>
           
            <div onClick={logoutHandler} className="hover:bg-neutral-700 bg-neutral-800 transition-all duration-100 active:scale-99 rounded-xl p-5 h-16 flex items-center mt-33 gap-3 cursor-pointer">
                <FiLogOut className="size-8 text-red-500  "/>
                <h1 className="text-[23px] font-gothic text-red-500"  >Logout</h1>
            </div>
            
        </div>

        
    </div>
  )
}

export default LeftSidebar