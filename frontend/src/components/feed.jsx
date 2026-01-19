import { LuImagePlus } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";
import Tweets from "./tweets";
import CreatePost from "./CreatePost";


import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getAllTweets, getRefresh, getIsActive } from "../redux/tweetSlice";


function Feed() {

  const {user} = useSelector(store => store.user)
  const dispatch = useDispatch()
  const {tweets} = useSelector(store => store.tweets)
  const {isActive} = useSelector(store => store.tweets)



    const forYouHandler = () => {
        dispatch(getIsActive(true))
    }

    const followingHandler = () => {
        dispatch(getIsActive(false))
    }




  return (
    <div className="bg-neutral-900 w-160 border-r-neutral-700 border-l-neutral-700 border py-7 h-screen overflow-hidden">


      <div className="   justify-between flex items-center pb-2 mb-0 border-b-neutral-700 border-t-0 border border-x-0">
                <h1 className="text-white text-2xl font-gothic pl-5">Feeds</h1>
        
                <div className=" flex gap-5 font-gothic text-sm pr-5">

                  <p onClick={forYouHandler} className={`${isActive ? "underline underline-offset-15  decoration-lime lime:decoration-lime yellow:decoration-yellow indigo:decoration-indigo red:decoration-red rose:decoration-rose orange:decoration-orange purple:decoration-purple text-white" : " text-neutral-500 no-underline" }  cursor-pointer  p-2 -mb-2 -mr-3`}>For you</p>

                  <p onClick={followingHandler} className={` ${!isActive ? "underline underline-offset-15  decoration-lime lime:decoration-lime yellow:decoration-yellow indigo:decoration-indigo red:decoration-red rose:decoration-rose orange:decoration-orange purple:decoration-purple text-white" : " text-neutral-500 no-underline" }  cursor-pointer   p-2 -mb-2`}>Following</p>

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