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

        const followingTweets = async () => {
        const id = user?._id
            try{
                const res = await axios.get(`/api/tweet/read/${id}`)
                dispatch(getAllTweets(res.data.tweet))
            } catch(err){
                console.log("error while getting following tweets in frontend");
            }
        }


        
    }, [id, dispatch, refresh])
    
}

export default useGetMyTweets