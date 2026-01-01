import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTweets } from "../redux/tweetSlice";

const useGetMyTweets = (id) => {
    const dispatch = useDispatch()
    const {refresh} = useSelector(store => store.tweets)
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
        
    }, [id, dispatch, refresh])
    
}

export default useGetMyTweets