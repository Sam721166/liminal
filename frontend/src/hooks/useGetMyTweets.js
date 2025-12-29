import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllTweets } from "../redux/tweetSlice";

const useGetMyTweets = (id) => {
    const dispatch = useDispatch()
    useEffect(() => {
        if (!id) return 
        
        const fetchMyTweets = async () => {
            try{
                const res = await axios.get(`/api/tweet/alltweets/${id}`, {
                    withCredentials: true
                })
                dispatch(getAllTweets(res.data.tweets))
                
            } catch(err){
                console.log("error while getting tweets", err);
            }   
        }
        fetchMyTweets()
        
    }, [id, dispatch])
    
}

export default useGetMyTweets