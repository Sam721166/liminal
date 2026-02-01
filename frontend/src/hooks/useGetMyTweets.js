import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTweets } from "../redux/tweetSlice";

const useGetMyTweets = (id) => {
    const dispatch = useDispatch()
    const {refresh, isActive} = useSelector(store => store.tweets)
    const {user} = useSelector(store => store.user)

 
        
    const fetchMyTweets = async () => {
        try{
            const res = await axios.get(`/api/tweet/read`, {
                withCredentials: true
            })
            dispatch(getAllTweets(res.data?.tweets ?? []))
            
        } catch(err){
            console.log("error while getting tweets", err);
        }   
    }

    
    const followingTweets = async () => {
        try{
            if (!user?._id) return  

            axios.defaults.withCredentials = true
            const res = await axios.get(`/api/tweet/alltweets/${user?._id}`, {
                withCredentials: true
            })
            dispatch(getAllTweets(res.data?.tweet ?? []))
        } catch(err){
            console.log("error while getting following tweets in frontend");
        }
    }


    useEffect(() => {
        if(isActive){
            fetchMyTweets()
        } else{
            followingTweets()
        }
        
        
    }, [id, user?.following?.length, refresh, isActive])
    
}

export default useGetMyTweets