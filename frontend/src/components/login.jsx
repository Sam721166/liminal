import React from "react";

function Login() {
  return (
    <div className="bg-neutral-900 w-full h-screen flex">
      <div className="w-[50%] h-full p-10 relative">
        <div className=" rounded-2xl   ">
          <img
            src="./gradiant2.jpg"
            alt=""
            className="w-full h-160 mask-b-from-70% rounded-2xl"
          />
        </div>

        <div className="flex flex-col absolute left-28 top-65">
          <h1 className="font-gothic text-8xl text-lime ">Where</h1>
          <h1 className="font-gothic text-6xl text-lime">Conversations</h1>
          <h1 className="font-gothic text-5xl text-lime">Begin.</h1>
        </div>
      </div>

      <div className="w-[50%] h-full flex items-center mt-50 text-white flex-col ">
        <h1 className="font-gothic text-6xl text-lime mb-10">Login</h1>

        <form action="">

            <div className=" relative border-2 border-neutral-700 focus-within:border-lime bg-neutral-800  w-110 rounded-xl h-15 mb-5">
            <input
                placeholder="Email"
                type="text"
                className=" absolute  text-white outline-none border-none border-2 mb-10 rounded-xl w-100 h-14 placeholder:text-neutral-600 font-gothic px-5 text-lg "
            />
            </div>

        

            <div className=" relative border-2 border-neutral-700 focus-within:border-lime bg-neutral-800  w-110 rounded-xl h-15">
            <input
                placeholder="Password"
                type="text"
                className=" absolute  text-white outline-none border-none border-2 mb-10 rounded-xl w-100 h-14 placeholder:text-neutral-600 font-gothic px-5 text-lg "
            />
            </div>
        </form>
        


      </div>
    </div>
  );
}

export default Login;
