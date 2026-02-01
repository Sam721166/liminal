import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMyProfile } from "../redux/userSlice";

const useGetProfile = (id) => {
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchMyProfile = async () => {
            try{
                const res = await axios.get(`/api/user/profile/${id}`, {
                    withCredentials: true
                })
                dispatch(getMyProfile(res.data.user))

            } catch(err){
                console.log("error while getting my profile", err);
            }   
        }
        fetchMyProfile()
        
    }, [id, dispatch])
    
}


export default useGetProfile