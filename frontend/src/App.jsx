import { useState } from 'react'
import './App.css'
import Body from './components/body'
import {Toaster} from "react-hot-toast"




function App() {

  return (
    <>
      <div className=''>
        <Body />
        <Toaster />
      </div>
    </>
  )
}

export default App
