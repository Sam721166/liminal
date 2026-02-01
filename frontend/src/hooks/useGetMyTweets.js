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
            const list = res.data?.tweets ?? res.data?.tweet ?? []
            dispatch(getAllTweets(Array.isArray(list) ? list : []))
        } catch(err){
            console.log("error while getting tweets", err);
            dispatch(getAllTweets([]))
        }
    }

    const followingTweets = async () => {
        try{
            if (!user?._id) return
            const res = await axios.get(`/api/tweet/alltweets/${user._id}`, {
                withCredentials: true
            })
            const list = res.data?.tweet ?? res.data?.tweets ?? []
            dispatch(getAllTweets(Array.isArray(list) ? list : []))
        } catch(err){
            console.log("error while getting following tweets in frontend", err);
            dispatch(getAllTweets([]))
        }
    }

    useEffect(() => {
        if (isActive) {
            fetchMyTweets()
        } else {
            if (user?._id) followingTweets()
        }
    }, [id, user?._id, user?.following?.length, refresh, isActive])
    
}

export default useGetMyTweets