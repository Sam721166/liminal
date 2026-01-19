import { IoArrowBack } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import useGetProfile from "../hooks/useGetProfile"
import { useSelector, useDispatch } from "react-redux"
import store from "../redux/store"
import axios from "axios";
import toast from "react-hot-toast";
import { followingUpdate } from "../redux/userSlice";


function Profile() {

    const {user, profile} = useSelector(store => store.user)
    const {id} = useParams()
    useGetProfile(id) // custom hook
    const dispatch = useDispatch()

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


 
  return (
    <div className='bg-neutral-900 w-160 border-r-neutral-700 border-l-neutral-700 border pt-4 '>

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

    </div>
  )
}

export default Profile