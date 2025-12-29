import { LuImagePlus } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";
import Tweets from "./tweets";
import CreatePost from "./CreatePost";
import { useSelector } from "react-redux";

function Feed() {

  const {tweets} = useSelector(store => store.tweets)

  return (
    <div className="bg-neutral-900 w-160 border-r-neutral-700 border-l-neutral-700 border py-7 h-screen overflow-hidden">


      <div className="justify-between flex items-center pb-2 mb-5 border-b-neutral-700 border-t-0 border">
        <h1 className="text-white text-2xl font-gothic pl-5">Feeds</h1>

        <div className=" flex gap-5 font-gothic text-sm pr-5">
          <p className="text-white cursor-pointer underline underline-offset-19  decoration-lime lime:decoration-lime yellow:decoration-yellow indigo:decoration-indigo red:decoration-red rose:decoration-rose orange:decoration-orange purple:decoration-purple">For you</p>
          <p className="text-neutral-500 cursor-pointer">Following</p>
        </div>
      </div>

      <div className="h-screen overflow-y-auto no-scrollbar pb-22">
        <CreatePost />

        {
          tweets?.map((tweet) => <Tweets key={tweet?._id} tweet={tweet} />)
        }
      </div>
      
      
      
      

    </div>
  )
}

export default Feed