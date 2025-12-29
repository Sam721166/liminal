import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getOtherUsers } from "../redux/userSlice";

const useOtherUser = (id) => {
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchOtherUser = async () => {
            try{
                const res = await axios.get(`/api/user/otheruser/${id}`, {
                    withCredentials: true
                })
                dispatch(getOtherUsers(res.data.otherUser))

            } catch(err){
                console.log("error while getting my profile", err);
            }   
        }
        fetchOtherUser()
        
    }, [id, dispatch])
    
}

export default useOtherUser