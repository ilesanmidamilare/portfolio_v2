"use client";

import { useState } from "react";

export default function Dropdown() {
  const [dropDown, setDropDown] = useState(false);

  return (
    
    <>
    
    {
        dropDown && 
        <div className="absolute w-full h-full bg-gray-300 top-0, left-0 right-0 bottom-0 p-4 flex flex-col gap-10">
          <header className="flex">
              <div className='flex'>
                <div className=' h-7.5 w-4 bg-gray-500 rounded-l-full'/>
                <div className=' h-7.5 w-4 bg-black rounded-r-full'/>
              </div>

              <div  className="flex place-items-center ml-auto gap-41 ">
                <div
                  className='flex flex-col gap-1 place-items-center relative'
                  onClick={() => setDropDown(prev => !prev)}
                >
                  <div className= { dropDown ? 'w-10 h-0.5 bg-black' :'w-10 h-0.5 bg-black'}/>
                  <div className={ dropDown ? 'w-8 h-0.5 bg-black' :'w-8 h-0.5 bg-black'}/>
                  <div className={ dropDown ? 'w-10 h-0.5 bg-black' :'w-10 h-0.5 bg-black'}/>
                </div>
              </div>
          </header>

          <div className="text-5xl font-black flex flex-col items-center gap-6">
            <div>Home</div>
            <div>About me</div>
            <div>Projects</div>
            <div>Contact</div>
            <div>Resume</div>
          </div>

          <div className="flex justify-between text-2xl flex-1 items-end font-bold">
            <div>Linkedin</div>
            <div>Email</div>
            <div>Github</div>
          </div>
        </div>
      }
    </>
  );
}
