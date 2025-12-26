import { IoSearchSharp } from "react-icons/io5";


function RightSidebar() {
  return (
    <div className='bg-neutral-900 w-120 p-7'>

      <div className="relative h-25 flex ">

        <IoSearchSharp className="absolute top-4 left-3 text-neutral-500 size-7 z-10 cursor-pointer" />

        <div className="  border-2 border-neutral-700 focus-within:border-lime bg-neutral-800  w-full rounded-xl h-15">
            

            <input placeholder="Search" type="text" className=' absolute left-10 bg-transparent text-white outline-none border-none mb-10 rounded-xl w-95 h-14 placeholder:text-neutral-600 font-gothic px-3 text-lg border-2 '  />
        </div>
      </div>
        

        <div className='w-full h-auto rounded-xl  bg-neutral-800  flex flex-col px-5 py-5 justify-center gap-4'>

          
          <h1 className="text-white font-gothic text-xl mb-1">Who to follow</h1>


            <div className="flex gap-4 p-3  bg-lime  rounded-lg h-19 w-full items-center cursor-pointer hover:bg-lime-200 transition-all duration-200 active:scale-99">
              <div className="">
                  <img src="https://pbs.twimg.com/profile_images/1995869338109444100/i0pfnqSY_400x400.jpg" alt="" className="rounded-full size-12 border-2" />
              </div>
              <div>
                  <h1 className=" text-md font-gothic text-black">Rix</h1>
                  <p className="text-neutral-500 font-semibold text-xs ">@rixcavella</p>
              </div>
            </div>

            <div className="flex gap-4 p-3  bg-lime  rounded-lg h-19 w-full items-center cursor-pointer hover:bg-lime-200 transition-all duration-200 active:scale-99">
              <div className="">
                  <img src="https://pbs.twimg.com/profile_images/1995869338109444100/i0pfnqSY_400x400.jpg" alt="" className="rounded-full size-12  border-2" />
              </div>
              <div>
                  <h1 className=" text-md font-gothic text-black">David</h1>
                  <p className="text-neutral-500 font-semibold text-xs ">@davidson</p>
              </div>
            </div>

            <div className="flex gap-4 p-3  bg-lime  rounded-lg h-19 w-full items-center cursor-pointer hover:bg-lime-200 transition-all duration-200 active:scale-99">
              <div className="">
                  <img src="https://pbs.twimg.com/profile_images/1995869338109444100/i0pfnqSY_400x400.jpg" alt="" className="rounded-full size-12  border-2" />
              </div>
              <div>
                  <h1 className=" text-md font-gothic text-black">Max</h1>
                  <p className="text-neutral-500 font-semibold text-xs ">@maxson</p>
              </div>
            </div>

        </div>
    </div>
  )
}

export default RightSidebar