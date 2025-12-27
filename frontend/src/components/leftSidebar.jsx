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
    <div className="bg-neutral-900 w-105 h-screen  px-8 py-8 flex flex-col gap-2 justify-between ">

        <Link to="/profile">
            <div onClick={() => setClick("profile")} className="w-full h-27 rounded-xl px-5 flex gap-3 items-center  cursor-pointer mb-5 text-white hover:bg-neutral-700 bg-neutral-800 transition-all duration-100 active:scale-99 ">
                <div>
                    <img src="https://pbs.twimg.com/profile_images/1995869338109444100/i0pfnqSY_400x400.jpg" alt="" className="rounded-full size-18 border-3 border-lime" />
                </div>
                <div>
                    <h1 className=" text-2xl font-gothic">Sam</h1>
                    <p className="text-neutral-500 font-semibold text-sm ">@samirande_</p>
                </div>
            </div>
        </Link>

        <div>
            
            <Link to="/">
            
                <div onClick={() => handleClick("home")} className={` rounded-xl p-5 h-16 flex items-center mt-2 gap-3 cursor-pointer transition-all duration-200 active:scale-99 border-2 ${click === "home" ? "bg-lime border-lime text-black hover:bg-none" : "hover:bg-neutral-800 text-white border-neutral-700 "} `}>
                    <MdHome className="size-8 "/>
                    <h1 className="text-[23px] font-gothic"  >Home</h1>
                </div>
            </Link>
        </div>

        

        <div>
            <div onClick={() => handleClick("explore")} className={` rounded-xl p-5 h-16 flex items-center mt-2 gap-3 cursor-pointer transition-all duration-200 active:scale-99 border-2  ${click === "explore" ? "bg-lime border-lime text-black hover:bg-none" : " border-neutral-700  text-white hover:bg-neutral-800"}`}>
                <FaHashtag className="size-6.5 "/>
                <h1 className="text-[23px] font-gothic"  >Explore</h1>
            </div>
        </div>

        

        <div>
            <div onClick={() => handleClick("notification")} className={`  rounded-xl p-5 h-16 flex items-center mt-2 gap-3 cursor-pointer transition-all duration-200 active:scale-99  border-2 ${click === "notification" ? "bg-lime border-lime text-black hover:bg-none" : " border-neutral-700   text-white hover:bg-neutral-800 "}`}>
                <IoNotifications className="size-7 "/>
                <h1 className="text-[23px] font-gothic"  >Notifications</h1>
            </div>
        </div>

        

        <div>
            <Link to="/profile" >
                <div onClick={() => handleClick("profile")} className={`  rounded-xl p-5 h-16 flex items-center mt-2 gap-3 cursor-pointer transition-all duration-200 active:scale-99  border-2 ${click === "profile" ? "bg-lime border-lime text-black hover:bg-none" : " text-white border-neutral-700  hover:bg-neutral-800 "}`}>

                    <MdAccountCircle className="size-8 "/>
                    <h1 className="text-[23px] font-gothic"  >Profile</h1>
                </div>
            </Link>
        </div>

        
        

        <div>
            <div onClick={() => handleClick("bookmark")} className={` rounded-xl p-5 h-16 flex items-center mt-2 gap-3 cursor-pointer transition-all duration-200 active:scale-99  border-2   ${click === "bookmark" ? "bg-lime border-lime text-black hover:bg-none" : " border-neutral-700 text-white hover:bg-neutral-800 "}`}>
                <FaBookmark className="size-5.5 "/>
                <h1 className="text-[23px] font-gothic"  >Bookmarks</h1>
            </div>
        </div>

        
        

        <div>
            <Link to="/login" >
                <div className="hover:bg-neutral-700 bg-neutral-800 transition-all duration-100 active:scale-99 rounded-xl p-5 h-16 flex items-center mt-17 gap-3 cursor-pointer">
                    <FiLogOut className="size-8 text-red-500  "/>
                    <h1 className="text-[23px] font-gothic text-red-500"  >Logout</h1>
                </div>
            </Link>
        </div>

        
    </div>
  )
}

export default LeftSidebar