import { LuImagePlus } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";
import { Link } from "react-router-dom";


function Tweets({tweet}) {

    const [like, setLike] = useState(false)
    const [bookmark, setBookmark] = useState(false)
    
    
  return (
    <div className="p-5 pb-4 break-all border-b-neutral-700 border">
        <div className="text-white">
            <div className="flex gap-1 items-start">
                <Link to={`/profile/${tweet.userId[0]}`}>
                    <img src="https://pbs.twimg.com/profile_images/1995869338109444100/i0pfnqSY_400x400.jpg" alt="" className="size-10 rounded-full cursor-pointer " />
                </Link>

                <Link to={`/profile/${tweet.userId[0]}`}>
                    <div className="flex gap-1 -mt-1">
                    <h1 className="font-gothic text-md ml-2 ">{tweet?.userDetails[0]?.name}</h1>
                    <p className="text-neutral-500 text-sm mt-0.5">@{tweet?.userDetails[0]?.username}</p>
                    <p className="text-neutral-500 text-xs mt-1.5">. 1m</p>
                    </div>
                </Link>

            </div>

          <div className="-mt-5 ml-13  ">
            <p>{tweet?.description}</p>
          </div>

          <div className="flex justify-between mt-4 mx-13">
            <div className="size-9 flex justify-center items-center cursor-pointer hover:bg-lime/10 lime:hover:bg-lime/10 orange:hover:bg-orange/10 indigo:hover:bg-indigo/10 rose:hover:bg-rose/10 red:hover:bg-red/10 yellow:hover:bg-yellow/10 purple:hover:bg-purple/10 rounded-full transition-all duration-100">
              <FaRegComment className="size-5  text-lime lime:text-lime yellow:text-yellow indigo:text-indigo red:text-red rose:text-rose orange:text-orange purple:text-purple
              

              "/>
            </div>
            
            <div className="flex gap-0.5 items-center">
                <div onClick={() => setLike(like => !like)} className={`size-9 flex justify-center items-center cursor-pointer hover:bg-red-500/10 rounded-full transition-all duration-100 group `}>

                    {
                        like ? (
                        <FaHeart className="size-5 text-red-500 transition-all duration-400 group-active:scale-50" />
                        ) : (
                        <FaRegHeart className="size-5 text-red-500 group-active:scale-50 transition-all duration-500 " /> 
                        )
                    }
                </div>

                <div>
                    <p className="text-sm">{tweet.like.length}</p>
                </div>
            </div>
            
            
            <div onClick={() => setBookmark(bookmark => !bookmark)} className="size-9 flex justify-center items-center cursor-pointer hover:bg-blue-500/10 rounded-full transition-all duration-100 group">

              {
                bookmark ? (
                  <FaBookmark className="size-5 transition-all duration-200 text-blue-500  group-active:scale-90 "/>
                ) : (
                  <FaRegBookmark className="size-5  text-neutral-500 group-hover:text-blue-500 transition-all duration-200 group-active:scale-90" />
                )
              }
              
            </div>
            
          </div>

        </div>
      </div>
  )
}

export default Tweets