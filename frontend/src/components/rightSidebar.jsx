import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";


function RightSidebar({otherUsers}) {
  return (
    <div className='bg-neutral-900 w-120 p-8 pr-12'>

      <div className="relative h-25 flex ">

        <IoSearchSharp className="absolute top-4 left-3 text-neutral-500 size-7 z-10 cursor-pointer" />

        <div className="  border-2 border-neutral-700 focus-within:border-lime  lime:focus-within:border-lime yellow:focus-within:border-yellow indigo:focus-within:border-indigo red:focus-within:border-red rose:focus-within:border-rose orange:focus-within:border-orange purple:focus-within:border-purple bg-neutral-800  w-full rounded-xl h-15">
            

            <input placeholder="Search" type="text" className=' absolute left-10 bg-transparent text-white outline-none border-none mb-10 rounded-xl w-95 h-14 placeholder:text-neutral-600 font-gothic px-3 text-lg border-2 '  />
        </div>
      </div>
        

        <div className='w-full h-auto rounded-xl  bg-neutral-800  flex flex-col px-5 py-5 justify-center '>

          
          <h1 className="text-white font-gothic text-xl mb-4">Who to follow</h1>

          <div className="h-auto  max-h-100 overflow-y-auto no-scrollbar">

          
            {
              otherUsers?.map((user) => (
                <Link to={`/profile/${user._id}`}>
                  <div key={user?._id} className=" relative flex gap-4 p-3  h-19 w-full items-center cursor-pointer transition-all duration-200  border-t-neutral-700  border border-b-0 border-x-0  hover:bg-neutral-700 hover:rounded-lg">
                    <div className="">
                        <img src="https://pbs.twimg.com/profile_images/1995869338109444100/i0pfnqSY_400x400.jpg" alt="" className="rounded-full size-12 border-2" />
                    </div>
                    <div>
                        <h1 className=" text-md font-gothic text-white">{user?.name}</h1>
                        <p className="text-neutral-500 font-semibold text-xs ">@{user?.username}</p>
                    </div>
                    <div>
                      <p className="absolute right-0 top-5.5 transition-all duration-100 text-black font-gothic rounded-lg px-3 py-1 bg-lime lime:bg-lime yellow:bg-yellow indigo:bg-indigo red:bg-red rose:bg-rose orange:bg-orange purple:bg-purple hover:bg-lime-200 hover:lime:bg-lime-200 hover:yellow:bg-yellow-100 hover:indigo:bg-indigo-100 hover:red:bg-red-300 hover:rose:bg-rose-300 hover:orange:bg-orange-200 hover:purple:bg-purple-200   cursor-pointer active:scale-98 mr-3">Follow</p>
                    </div>
                  </div>
                </Link>
              ))
            }

          </div>


        </div>
    </div>
  )
}

export default RightSidebar