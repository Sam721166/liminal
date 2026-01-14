import { LuImagePlus } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getRefresh } from "../redux/tweetSlice";
import { MdDeleteOutline } from "react-icons/md";
import toast from "react-hot-toast";

function Tweets({tweet}) {

    const [bookmark, setBookmark] = useState(false)
    const {user} = useSelector(store => store.user)
    const disptch = useDispatch()


    const isLiked = tweet.like.includes(user?._id)

    const likeHandler = async (id) => {
        try{
            const res = await axios.put(`/api/tweet/like/${id}`, {id:user?._id}, {
                withCredentials: true
            })
            disptch(getRefresh())
        } catch(err){
            console.log("error while liking tweet", err);
        }
    }


    const deleteHandler = async (id) => {
      try{
        const res = await axios.delete(`/api/tweet/delete/${id}`)
        toast.success(res.data.message)
        disptch(getRefresh())
      } catch(err){
        console.log("error while del;eting tweet frontend: ", err);
      }
    }



  return (
    <div className="p-5 pb-4 break-all border-b-neutral-700 border">
        <div className="relative text-white">
            <div className="flex gap-1 items-start">
                <Link to={`/profile/${tweet.userId[0]}`}>
                    <img src="sam2.jpg" alt="" className="size-10 rounded-full cursor-pointer " />
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

          <div className=" flex justify-between mt-4 mx-13">
            <div className="size-9 flex justify-center items-center cursor-pointer hover:bg-lime/10 lime:hover:bg-lime/10 orange:hover:bg-orange/10 indigo:hover:bg-indigo/10 rose:hover:bg-rose/10 red:hover:bg-red/10 yellow:hover:bg-yellow/10 purple:hover:bg-purple/10 rounded-full transition-all duration-100">
              <FaRegComment className="size-5  text-lime lime:text-lime yellow:text-yellow indigo:text-indigo red:text-red rose:text-rose orange:text-orange purple:text-purple
              

              "/>
            </div>
            
            <div className="absolute left-52 flex gap-0.5 items-center">
                <div onClick={() => likeHandler(tweet._id)} className={`size-9 flex justify-center items-center cursor-pointer hover:bg-red-500/10 rounded-full transition-all duration-100 group `}>

                    {
                        isLiked ? (
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
            
            
            <div onClick={() => setBookmark(bookmark => !bookmark)}   className="absolute right-44  size-9 flex justify-center items-center cursor-pointer hover:bg-blue-500/10 rounded-full transition-all duration-100 group ">

              {
                bookmark ? (
                  <FaBookmark className="size-5 transition-all duration-200 text-blue-500  group-active:scale-90 "/>
                ) : (
                  <FaRegBookmark className="size-5  text-neutral-500 group-hover:text-blue-500 transition-all duration-200 group-active:scale-90" />
                )
              }
              
            </div>
            
            {
              user?._id === tweet?.userId[0] ? (
                <div onClick={() => deleteHandler(tweet._id)} className="absolute right-0 size-9 flex justify-center items-center cursor-pointer hover:bg-red-500/20 rounded-full transition-all duration-100 group ">

                  <MdDeleteOutline className="size-7  text-neutral-500 group-hover:text-red-500 transition-all duration-200 group-active:scale-90" />
                    
                  
                </div>
              ) : (
                <div></div>
              )
            }
            
            
          </div>

        </div>
      </div>
  )
}

export default Tweets