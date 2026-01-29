import { IoArrowBack } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import useGetProfile from "../hooks/useGetProfile"
import { useSelector, useDispatch } from "react-redux"

import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import { timeSince } from "../utils/constant";


import axios from "axios";
import toast from "react-hot-toast";
import { followingUpdate } from "../redux/userSlice";
import { useEffect, useState } from "react";
import { getRefresh } from "../redux/tweetSlice";

function Profile() {

    const {user, profile} = useSelector(store => store.user)
    const {tweets} = useSelector(store => store.tweets)
    const {id} = useParams()
    useGetProfile(id) // custom hook
    const dispatch = useDispatch()


        const [myTweet, setMyTweet] = useState([])
        const [bookmark, setBookmark] = useState({})
    
    
        const isLiked = (tweet) => tweet.like.includes(user?._id)
      
        const bookmarkhandler = (tweetId) => {
            setBookmark(prev => ({
                ...prev,
                [tweetId]: !prev[tweetId]
            }))
        }


    
        const likeHandler = async (id) => {
            try{
                const res = await axios.put(`/api/tweet/like/${id}`, {id:user?._id}, {
                    withCredentials: true
                })
                mytweet()
            } catch(err){
                console.log("error while liking tweet", err);
            }
        }

    const followHandler = async () => {
        try{
            axios.defaults.withCredentials = true
            const res = await axios.put(`/api/user/follow/${id}`, {id: user?._id})
            dispatch(followingUpdate(id))
            toast.success(res.data.message)
        } catch(err){
            console.log("error while follow or unfollow in frontend: ", err);
            toast.error(err.response.data.message)
        }
    }


    const deleteHandler = async (id) => {
        try{
        const res = await axios.delete(`/api/tweet/delete/${id}`)
        toast.success(res.data.message)
        
        dispatch(getRefresh())
        mytweet()
        } catch(err){
        console.log("error while del;eting tweet frontend: ", err);
        }
    }

   

    const mytweet = async () => {
        try{
            const res = await axios.get(`/api/tweet/mytweet/${profile._id}`)
            setMyTweet(res.data.tweet)
        } catch(err){
            console.log("error while getting my tweet:", err);
        }
        
    }
        
    useEffect(() => {
    if (profile?._id) {
        mytweet();
    }
    }, [profile?._id]);




 
  return (
    <div className='bg-neutral-900 w-160 border-r-neutral-700 border-l-neutral-700 border pt-4 overflow-y-scroll h-screen'>

        <div className='h-18 border-b-neutral-700 border border-t-0 text-white border-x-0 p-2 flex items-center gap-4'>


            <Link to="/">
                <div className="transition-all duration-200 hover:bg-neutral-800 size-12 flex justify-center items-center rounded-full cursor-pointer ">
                    <IoArrowBack className="size-7" />
                </div>
            </Link>

            <div>
                <h1 className='font-gothic text-lg'>{profile?.name}</h1>
                <p className='text-neutral-500'>{profile?.tweetId.length} posts</p>
            </div>
        </div>


        <div>
            <img src="https://pbs.twimg.com/profile_banners/1863590792557977600/1765632694/1500x500" alt="" />
        </div>

        <div className="relative px-5 h-20">
            <div>
                <img src="../public/sam2.jpg" alt="" className="absolute z-2 -top-19 size-38 rounded-full border-3 border-lime lime:border-lime yellow:border-yellow indigo:border-indigo red:border-red rose:border-rose orange:border-orange purple:border-purple" />
            </div>


            {
                profile?._id === user?._id ? (
                    <div>
                        <p className="absolute right-2 mr-2 mt-4 px-3 py-2 font-gothic text-black bg-lime lime:bg-lime yellow:bg-yellow indigo:bg-indigo red:bg-red rose:bg-rose orange:bg-orange purple:bg-purple hover:bg-lime-200 hover:lime:bg-lime-200 hover:yellow:bg-yellow-100 hover:indigo:bg-indigo-100 hover:red:bg-red-300 hover:rose:bg-rose-300 hover:orange:bg-orange-200 hover:purple:bg-purple-200 transition-all duration-200 cursor-pointer active:scale-98 rounded-lg text-md ">Edit Profile</p>
                    </div>
                ) : (
                    <div>
                        <div>
                        <p onClick={followHandler} className="absolute right-2 mr-2 mt-4 px-6 py-2 font-gothic text-black bg-lime lime:bg-lime yellow:bg-yellow indigo:bg-indigo red:bg-red rose:bg-rose orange:bg-orange purple:bg-purple hover:bg-lime-200 hover:lime:bg-lime-200 hover:yellow:bg-yellow-100 hover:indigo:bg-indigo-100 hover:red:bg-red-300 hover:rose:bg-rose-300 hover:orange:bg-orange-200 hover:purple:bg-purple-200 transition-all duration-200 cursor-pointer active:scale-98 rounded-lg text-lg ">{user.following.includes(id) ? "Follwing" : "Follow"}</p>
                    </div>
                    </div>
                )
            }
                


        </div>

        <div className="text-white px-5 py-2 border-b-neutral-700 border border-t-0 border-x-0 pb-5">
            <h1 className="font-gothic text-2xl ">{profile?.name}</h1>
            <p className="text-neutral-400">@{profile?.username}</p>

            <p className="mt-5">18. learning cool stuffs</p>
        </div>






        <div className="text-white w-full px-5">
            {
                myTweet.length === 0 ? (
                    <div>
                        <p className="text-neutral-500 text-center mt-5">
                            No tweets yet
                        </p>
                    </div>
                ) : (
                    myTweet?.map((tweet) => (
                        <div className="p-5 pb-4 -mx-5 break-all border-b-neutral-700 border-x-0 border-t-0 border">
                            <div className="relative text-white">
                                <div className="flex gap-1 items-start">
                                    
                                        <img src="../public/sam2.jpg" alt="" className="size-10 rounded-full cursor-pointer " />
                                    
                    
                                    
                                        <div className="flex gap-1 -mt-1">
                                        <h1 className="font-gothic text-md ml-2 text-white">{tweet?.userDetails[0]?.name}</h1>
                                        <p className="text-neutral-500 text-sm mt-0.5">@{tweet?.userDetails[0]?.username}</p>
                                        <p className="text-neutral-500 text-xs mt-1.5">. {timeSince(tweet.createdAt)}</p>
                                        </div>
                                    
                    
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
                                                isLiked(tweet) ? (
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
                                    
                                    
                                    <div onClick={() => bookmarkhandler(tweet._id)}   className="absolute right-44  size-9 flex justify-center items-center cursor-pointer hover:bg-blue-500/10 rounded-full transition-all duration-100 group ">

                                    {
                                        bookmark[tweet._id] ? (
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
                    ))
                )
                
            }
        </div>



            

    </div>
  )
}

export default Profile