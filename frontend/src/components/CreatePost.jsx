import { LuImagePlus } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";

function CreatePost() {
  return (
    <div className="h-40 w-full border border-x-0 border-t-0 border-b-neutral-700 text-white px-5 flex flex-col justify-between pb-5 ">

        <div className="flex  gap-5 items-center ">
          <img src="https://pbs.twimg.com/profile_images/1995869338109444100/i0pfnqSY_400x400.jpg" alt="" className="rounded-full size-10 " />

          <input type="text" className=" text-white bg-transparent border-none outline-none" placeholder="What's happening?" />
        </div>

        <div className="flex justify-between items-center ">

          <div className="hover:bg-lime-400/10 size-9 transition-all duration-100 cursor-pointer flex justify-center items-center rounded-full ">
            <LuImagePlus className="size-5 text-lime lime:text-lime yellow:text-yellow indigo:text-indigo red:text-red rose:text-rose orange:text-orange purple:text-purple " />
          </div>

          <div className="py-2 px-3 cursor-pointer bg-lime lime:bg-lime yellow:bg-yellow indigo:bg-indigo red:bg-red rose:bg-rose orange:bg-orange purple:bg-purple hover:bg-lime-200 hover:lime:bg-lime-200 hover:yellow:bg-yellow-100 hover:indigo:bg-indigo-100 hover:red:bg-red-300 hover:rose:bg-rose-300 hover:orange:bg-orange-200 hover:purple:bg-purple-200  rounded-lg transition-all duration-100 ">
            <p className="text-black font-gothic">Post</p>
          </div>

        </div>
    </div>
  )
}

export default CreatePost