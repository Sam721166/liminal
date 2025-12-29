
import { Outlet } from "react-router-dom"
import LeftSidebar from "./leftSidebar"
import RightSidebar from "./rightSidebar"
import useOtherUser from "../hooks/useOtherUser"
import { useSelector } from "react-redux"
import store from "../redux/store"
import useGetMyTweets from "../hooks/useGetMyTweets"

function Home() {

  //custom hook
  const {user, otherUsers} = useSelector(store => store.user)
  useOtherUser(user?._id)
  useGetMyTweets(user?._id)

  return (
    <>
      <div className="flex selection:bg-lime selection:text-black 
         lime:selection:bg-lime yellow:selection:bg-yellow indigo:selection:bg-indigo red:selection:bg-red rose:selection:bg-rose orange:selection:bg-orange purple:selection:bg-purple
         
      ">
        <LeftSidebar />
        <Outlet />
        <RightSidebar otherUsers={otherUsers} />
      </div>
      
    </>
  )
}

export default Home