import { LuImagePlus } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";


function Feed() {

  const [like, setLike] = useState(false)
  const [bookmark, setBookmark] = useState(false)


  return (
    <div className="bg-neutral-900 w-160 border-r-neutral-700 border-l-neutral-700 border py-7">


      <div className="justify-between flex items-center pb-2 mb-5 border-b-neutral-700 border-t-0 border">
        <h1 className="text-white text-2xl font-gothic pl-5">Feeds</h1>

        <div className=" flex gap-5 font-gothic text-sm pr-5">
          <p className="text-white cursor-pointer underline underline-offset-19  decoration-lime lime:decoration-lime yellow:decoration-yellow indigo:decoration-indigo red:decoration-red rose:decoration-rose orange:decoration-orange purple:decoration-purple">For you</p>
          <p className="text-neutral-500 cursor-pointer">Following</p>
        </div>
      </div>


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



      <div className="p-5 pb-4 break-all border-b-neutral-700 border">
        <div className="text-white">
          <div className="flex gap-1 items-start">
            <img src="https://pbs.twimg.com/profile_images/1995869338109444100/i0pfnqSY_400x400.jpg" alt="" className="size-10 rounded-full " />

            <div className="flex gap-1 -mt-1">
              <h1 className="font-gothic text-md ml-2 ">Sam</h1>
              <p className="text-neutral-500 text-sm mt-0.5">@samirande_</p>
              <p className="text-neutral-500 text-xs mt-1.5">. 1m</p>
            </div>
            
          </div>

          <div className="-mt-5 ml-13  ">
            <p>Hey there I'm Sam</p>
          </div>

          <div className="flex justify-between mt-4 mx-13">
            <div className="size-9 flex justify-center items-center cursor-pointer hover:lime/10 lime:hover:bg-lime/10 orange:hover:bg-orange/10 indigo:hover:bg-indigo/10 rose:hover:bg-rose/10 red:hover:bg-red/10 yellow:hover:bg-yellow/10 purple:hover:bg-purple/10 rounded-full transition-all duration-100">
              <FaRegComment className="size-5  text-lime lime:text-lime yellow:text-yellow indigo:text-indigo red:text-red rose:text-rose orange:text-orange purple:text-purple
              "/>
            </div>
            
            <div onClick={() => setLike(like => !like)} className={`size-9 flex justify-center items-center cursor-pointer hover:bg-red-500/10 rounded-full transition-all duration-100 group `}>

              {
                like ? (
                  <FaHeart className="size-5 text-red-500 transition-all duration-400 group-active:scale-50" />
                ) : (
                  <FaRegHeart className="size-5 text-red-500 group-active:scale-50 transition-all duration-500 " /> 
                )
              }
            </div>
            
            <div onClick={() => setBookmark(bookmark => !bookmark)} className="size-9 flex justify-center items-center cursor-pointer hover:bg-blue-500/10 rounded-full transition-all duration-100 group">

              {
                bookmark ? (
                  <FaBookmark className="size-5 transition-all duration-200 text-blue-500  group-active:scale-90 "/>
                ) : (
                  <FaRegBookmark className="size-5  text-blue-500 transition-all duration-200 group-active:scale-90" />
                )
              }
              
            </div>
            
          </div>

        </div>
      </div>


    </div>
  )
}

export default Feed