
import { Outlet } from "react-router-dom"
import Feed from "./feed"
import LeftSidebar from "./leftSidebar"
import Profile from "./profile"
import RightSidebar from "./rightSidebar"



function Home() {
  return (
    <>
      <div className="flex">
        <LeftSidebar />
        <Outlet />
        <RightSidebar />
      </div>
      
    </>
  )
}

export default Home