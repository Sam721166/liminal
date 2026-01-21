import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function Bookmark() {

    const {user} = useSelector(store => store.user)
    const [bookmarks, setBookmarks] = useState()

  return (
    <div className='w-160 h-screen bg-neutral-900 text-white  border-neutral-700 border border-y-0 '>
        <h1 className='text-2xl mt-2 font-gothic border border-neutral-700 border-x-0 border-t-0 pb-2 px-5 pt-5'>Bookmark</h1>


        <div>
            {
                
            }
        </div>
    </div>
  )
}

export default Bookmark