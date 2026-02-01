import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { timeSince } from '../utils/constant'
import toast from 'react-hot-toast'

import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import { getRefresh } from '../redux/tweetSlice'
import { useDispatch } from 'react-redux'
import { bookmarkUpdate } from '../redux/userSlice'

function Bookmark() {

  


    const {user} = useSelector(store => store.user)
    const {tweets} = useSelector(store => store.tweets)
    const [bookmarks, setBookmarks] = useState([])
    const dispatch = useDispatch()

    const isLiked = (tweet) => tweet?.like?.includes(user?._id)

    const isBookmarked = (tweetId) => {
      return user?.bookmark?.includes(tweetId)
    }




    useEffect(() => {
      const bookmarkHandler = async () => {
        try{
          const res = await axios.get(`/api/user/getbookmark/${user._id}`)
          setBookmarks(res.data?.tweet ?? [])
        } catch(err){
          console.log("error while get bookmark frontend: ", err);
        }
      }

      bookmarkHandler()
    }, [user, tweets])

    
    const bookmarkhandler = async (tweetId) => {
      try{
        
        const res = await axios.put(`/api/user/bookmark/${tweetId}`, {id:user?._id}, {
          withCredentials: true
        })
        toast.success(res.data.message)

        dispatch(bookmarkUpdate(tweetId))
        dispatch(getRefresh())

      } catch (err){
        console.log("error while bookmark: ", err);
      }
    }



    const likeHandler = async (id) => {
      try{
        const res = await axios.put(`/api/tweet/like/${id}`, {id:user?._id}, {
            withCredentials: true
        })

        dispatch(getRefresh())
      } catch(err){
          console.log("error while liking tweet", err);
      }
    }

   

  return (
    <div className='w-160 h-screen bg-neutral-900 text-white  border-neutral-700 border border-y-0 '>
        <h1 className='text-2xl mt-2 font-gothic border border-neutral-700 border-x-0 border-t-0 pb-2 px-5 pt-5'>Bookmarks</h1>


        <div className='text-white p-5  h-166 w-full overflow-y-scroll'>
            {
              bookmarks.length === 0 ? (
                <div className='text-neutral-500 justify-center flex'>no bookmarks yet</div>
              ) : (
                bookmarks.map((tweet) => (
                  
                  <div className="p-5 pb-4 -mx-5 break-all border-b-neutral-700 border-x-0 border-t-0 border">
                    <div className="relative text-white">
                        <div className="flex gap-1 items-start">
                            
                                <img src="/sam2.jpg" alt="" className="size-10 rounded-full cursor-pointer " />
                            
            
                            
                                <div className="flex gap-1 -mt-1">
                                <h1 className="font-gothic text-md ml-2 text-white">{tweet?.userDetails[0]?.name}</h1>
                                <p className="text-neutral-500 text-sm mt-0.5">@{tweet?.userDetails[0]?.username}</p>
                                <p className="text-neutral-500 text-xs mt-1.5">. {timeSince(tweet.createdAt)}</p>
                                </div>
                            
            
                        </div>
            
                        <div className="-mt-5 ml-13  ">
                            <p>{tweet?.description}</p>
                        </div>



                        
                        <div className=" flex justify-between mt-4 mx-13 mb-8">
                            
                            
                            <div className="absolute left-25 flex gap-0.5 items-center">
                                <div onClick={() => likeHandler(tweet._id)} className={`size-9 flex justify-center items-center cursor-pointer hover:bg-red-500/10 rounded-full transition-all duration-100 group `}>

                                    {
                                        isLiked(tweet) ? (
                                        <FaHeart className="size-5 text-red-500 transition-all duration-400 group-active:scale-50" />
                                        ) : (
                                        <FaRegHeart className="size-5 text-red-500 group-active:scale-50 transition-all duration-500 " /> 
                                        )
                                    }
                                </div>

                                <div>
                                    <p className="text-sm">{tweet?.like?.length ?? 0}</p>
                                </div>
                            </div>
                            
                            
                            <div onClick={() => bookmarkhandler(tweet._id)}   className="absolute right-56  size-9 flex justify-center items-center cursor-pointer hover:bg-blue-500/10 rounded-full transition-all duration-100 group ">

                            {
                                isBookmarked(tweet._id) ? (
                                <FaBookmark className="size-5 transition-all duration-200 text-blue-500  group-active:scale-90 "/>
                                ) : (
                                <FaRegBookmark className="size-5  text-neutral-500 group-hover:text-blue-500 transition-all duration-200 group-active:scale-90" />
                                )
                            }
                            
                            </div>
                            
                            
                            
                            
                        </div>
            
                    
                    </div>
                </div>


                ))
              )
              
            }
        </div>
    </div>
  )
}

export default Bookmark