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

  const forYouHandler = () => {
    dispatch(getIsActive(true))
  }

  const followingHandler = () => {
    dispatch(getIsActive(false))
  }

  return (
      <div className="bg-neutral-900 w-160 border-r-neutral-700 border-l-neutral-700 border py-7 h-screen overflow-hidden">


  

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