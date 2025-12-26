import { MdHome } from "react-icons/md";
import { FaHashtag } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { FaBookmark } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import { useState } from "react";

import { Link } from "react-router-dom";


function LeftSidebar() {

    const [click, setClick] = useState("home")
    
    const handleClick = (newClick) => {
        document.documentElement.classList.remove(
        "home",
        "explore",
        "notification",
        "profile",
        "bookmark"
        );
        document.documentElement.classList.add(newClick);
        setClick(newClick);
    };



  return (
    <div className="bg-neutral-900 w-105 h-screen  px-6 py-8 flex flex-col gap-2 justify-between ">

        <div className="w-full h-27 rounded-xl px-5 flex gap-3 items-center  cursor-pointer mb-5 text-black hover:bg-lime-200 bg-lime transition-all duration-100 active:scale-99 ">
            <div>
                <img src="https://pbs.twimg.com/profile_images/1995869338109444100/i0pfnqSY_400x400.jpg" alt="" className="rounded-full size-18 border-3" />
            </div>
            <div>
                <h1 className=" text-2xl font-gothic">Sam</h1>
                <p className="text-neutral-500 font-semibold text-sm ">@samirande_</p>
            </div>
        </div>

        <div>
            
            <Link to="/">
            
                <div onClick={() => handleClick("home")} className={`  border-lime rounded-xl p-5 h-16 flex items-center mt-2 gap-3 cursor-pointer transition-all duration-200 active:scale-99 border-2 ${click === "home" ? "bg-lime text-black hover:bg-none" : "hover:bg-neutral-800 text-white"}`}>
                    <MdHome className="size-8 "/>
                    <h1 className="text-2xl font-gothic"  >Home</h1>
                </div>
            </Link>
        </div>

        

        <div>
            <div onClick={() => handleClick("explore")} className={` rounded-xl p-5 h-16 flex items-center mt-2 gap-3 cursor-pointer transition-all duration-200 active:scale-99 border-2 border-lime   ${click === "explore" ? "bg-lime text-black hover:bg-none" : " text-white hover:bg-neutral-800 "}`}>
                <FaHashtag className="size-7 "/>
                <h1 className="text-2xl font-gothic"  >Explore</h1>
            </div>
        </div>

        

        <div>
            <div onClick={() => handleClick("notification")} className={`  rounded-xl p-5 h-16 flex items-center mt-2 gap-3 cursor-pointer transition-all duration-200 active:scale-99  border-2 border-lime   ${click === "notification" ? "bg-lime text-black hover:bg-none" : " text-white hover:bg-neutral-800 "}`}>
                <IoNotifications className="size-8 "/>
                <h1 className="text-2xl font-gothic"  >Notification</h1>
            </div>
        </div>

        

        <div>
            <Link to="/profile" >
                <div onClick={() => handleClick("profile")} className={`  rounded-xl p-5 h-16 flex items-center mt-2 gap-3 cursor-pointer transition-all duration-200 active:scale-99  border-2 border-lime   ${click === "profile" ? "bg-lime text-black hover:bg-none" : " text-white hover:bg-neutral-800 "}`}>

                    <MdAccountCircle className="size-9 "/>
                    <h1 className="text-2xl font-gothic"  >Profile</h1>
                </div>
            </Link>
        </div>

        
        

        <div>
            <div onClick={() => handleClick("bookmark")} className={` rounded-xl p-5 h-16 flex items-center mt-2 gap-3 cursor-pointer transition-all duration-200 active:scale-99  border-2 border-lime   ${click === "bookmark" ? "bg-lime text-black hover:bg-none" : " text-white hover:bg-neutral-800 "}`}>
                <FaBookmark className="size-6 "/>
                <h1 className="text-2xl font-gothic"  >Bookmark</h1>
            </div>
        </div>

        
        

        <div>
            <Link to="/login" >
                <div className="bg-red-500 hover:bg-red-800 transition-all duration-200 active:scale-99 rounded-xl p-5 h-16 flex items-center mt-17 gap-3 cursor-pointer">
                    <FiLogOut className="size-8 "/>
                    <h1 className="text-2xl font-gothic"  >Logout</h1>
                </div>
            </Link>
        </div>

        
    </div>
  )
}

export default LeftSidebar