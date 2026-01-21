import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home'
import Login from './login'
import Feed from './feed'
import Profile from './profile'
import Settings from './settings'
import Bookmark from './bookmark'



function Body() {
  return (
    <> 
      <BrowserRouter>
        <Routes >

          <Route path='/login' element={<Login />} />

          <Route element={<Home />} >
            <Route path='/' element={<Feed />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/bookmark' element={<Bookmark />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
    
  )
}

export default Body