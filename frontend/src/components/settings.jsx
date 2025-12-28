import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function Settings() {

    
    const [color, setColor] = useState(() => {
        return localStorage.getItem("theme-color") || "lime";
    })
    
    const handleColor = (newColor) => {
        document.documentElement.classList.remove(
        "lime",
        "yellow",
        "indigo",
        "red",
        "rose",
        "orange",
        "purple"
        );
        document.documentElement.classList.add(newColor);
        localStorage.setItem("theme-color", newColor);
        setColor(newColor);
    }; 

    useEffect(() => {
        document.documentElement.classList.add(color);
    }, []);


  return (
    <div className='bg-neutral-900 w-160 border-r-neutral-700 border-l-neutral-700 border py-7 '>
        
        <div className="justify-between flex items-center pb-2 mb-5 border-b-neutral-700 border-t-0 border border-x-0  ">
            <h1 className="text-white text-2xl font-gothic pl-5">Settings</h1>
        </div>


        <div className='mt-7 mx-5 flex flex-col'>
            <h1 className='text-lime lime:text-lime yellow:text-yellow indigo:text-indigo red:text-red rose:text-rose orange:text-orange purple:text-purple font-gothic text-xl  mb-6 '>Colour Themes</h1>

            <div className='text-white font-gothic flex gap-7'>
                
                <div onClick={() => handleColor("lime")} className={`rounded-full size-13 bg-lime ${color === "lime" ? "outline-3 outline-offset-3" : ""} cursor-pointer active:scale-98 transition-all duration-100`}>

                </div>
                
                <div onClick={() => handleColor("yellow")} className={` rounded-full size-13 bg-yellow-200 cursor-pointer active:scale-98 transition-all duration-100  ${color === "yellow" ? "outline-3 outline-offset-3" : ""} `}>

                </div>
                
                <div onClick={() => handleColor("indigo")}  className={`rounded-full size-13 bg-indigo-200  cursor-pointer active:scale-98 transition-all duration-100  ${color === "indigo" ? "outline-3 outline-offset-3" : ""} `}>

                </div>
                
                <div onClick={() => handleColor("red")}  className={`rounded-full size-13 bg-red-400  cursor-pointer active:scale-98 transition-all duration-100  ${color === "red" ? "outline-3 outline-offset-3" : ""} `}>

                </div>
                
                <div onClick={() => handleColor("rose")}  className={`rounded-full size-13 bg-rose-400  cursor-pointer active:scale-98 transition-all duration-100  ${color === "rose" ? "outline-3 outline-offset-3" : ""} `}>

                </div>
                
                <div onClick={() => handleColor("orange")}  className={`rounded-full size-13 bg-orange-300  cursor-pointer active:scale-98 transition-all duration-100  ${color === "orange" ? "outline-3 outline-offset-3" : ""} `}>

                </div>
                
                <div onClick={() => handleColor("purple")}  className={`rounded-full size-13 bg-purple-300  cursor-pointer active:scale-98 transition-all duration-100  ${color === "purple" ? "outline-3 outline-offset-3" : ""} `}>

                </div>

            </div>
        </div>

    </div>


  )
}

export default Settings