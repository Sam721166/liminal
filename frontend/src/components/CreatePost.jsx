import { LuImagePlus } from "react-icons/lu";
import toast from "react-hot-toast";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { getAllTweets, getRefresh, getIsActive } from "../redux/tweetSlice";

function CreatePost() {

    const [description, setDescription] = useState("")
    const {user} = useSelector(store => store.user)
    const dispatch = useDispatch()
    


    const handleSubmit =async () => {
        // e.preventDefault()
        try{
            const res = await axios.post("/api/tweet/create", {description:description, id:user?._id}, {
                withCredentials: true
            })
            dispatch(getRefresh())
            if(res.data.success){
                toast.success(res.data.message)
            }
            
        } catch(err){
            toast.error(err.response.data.message)
            console.log("error while creating tweet in frontend", err);
            
        }
        setDescription("")
    }

    



  return (



    <div>

        
       

        <div className="h-40 w-full border border-x-0 border-t-0  border-b-neutral-700 text-white px-5 flex flex-col justify-between pb-5 mt-5">

            <form action="">

            

                <div className="flex  gap-5 items-center ">
                <img src="sam2.jpg" alt="" className="rounded-full size-10 " />



                <input value={description} onChange={(e) => setDescription(e.target.value)}
                type="text" className=" text-white bg-transparent border-none outline-none" placeholder="What's happening?" />


                </div>

                <div className="flex justify-between items-center mt-14.5">

                    <div className="hover:bg-lime-400/10 size-9 transition-all duration-100 cursor-pointer flex justify-center items-center rounded-full ">
                        <LuImagePlus className="size-5 text-lime lime:text-lime yellow:text-yellow indigo:text-indigo red:text-red rose:text-rose orange:text-orange purple:text-purple " />
                    </div>

                    <div onClick={handleSubmit} className="py-2 px-3 cursor-pointer bg-lime lime:bg-lime yellow:bg-yellow indigo:bg-indigo red:bg-red rose:bg-rose orange:bg-orange purple:bg-purple hover:bg-lime-200 hover:lime:bg-lime-200 hover:yellow:bg-yellow-100 hover:indigo:bg-indigo-100 hover:red:bg-red-300 hover:rose:bg-rose-300 hover:orange:bg-orange-200 hover:purple:bg-purple-200  rounded-lg transition-all duration-100 ">
                        <p className="text-black font-gothic">Post</p>
                    </div>

                </div>
            </form>
        </div>
    </div>
  )
}

export default CreatePost