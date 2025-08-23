"use client";

import { useState, useEffect  } from "react";
import Logo from "../../public/assets/svgs/Logo"
import { Twitter } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Instagram } from "lucide-react";


export default function Home() {
  const [dropDown, setDropDown] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const defaultTheme = prefersDark ? "dark" : "light";
      setTheme(defaultTheme);
      document.documentElement.setAttribute("data-theme", defaultTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
   <div className="h-[100dvh] w-screen flex justify-center ">
      
      {/* //wrapper for the whole page */}
      <div className=" h-full max-w-480 w-full p-4 lg:p-8">

        {/* //header */}
        <header className="flex justify-between items-center  h-6">
          <Logo className='w-6 h-6 text-brand-900 dark:text-brand-50 cursor-pointer'/>

          {/* //Wrapper (scroll nav, theme-changer & menu) */}
          <div className="flex justify-between lg:w-1/3 items-center ">
            {/* //Scroll navigation and theme-Changer */}
            <div className=" gap-6 items-center hidden lg:flex">
              <div className="font-bold">Scroll To Navigate</div>
              <button 
                className="flex cursor-pointer"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                <div className=' h-6 w-3  bg-brand-100  rounded-l-full dark:bg-brand-900 border-l-2 border-t-2 border-b-2 dark:border-brand-100'/>
                <div className=' h-6 w-3   bg-brand-900 rounded-r-full dark:bg-brand-100  '/>
              </button>
            </div>

            {/* Menu */}
            <button 
              className='flex flex-col gap-1 place-items-center hover:bg-amber-400 cursor-pointer'
               onClick={() => setDropDown(prev => !prev)}
            >
              <div className= {'w-10 h-0.5 bg-brand-900 dark:bg-brand-50'}/>
              <div className={ 'w-8 h-0.5 bg-brand-900 dark:bg-brand-50'}/>
              <div className={'w-10 h-0.5 bg-brand-900 dark:bg-brand-50'}/>
            </button>
          </div>
        </header>

        {/* //Dropdown */}
        {
          dropDown && 
          <div className="p-4 lg:p-8 absolute w-full lg:w-1/3 h-full bg-brand-100 dark:bg-brand-800 top-0, left-0 right-0 bottom-0 gap-10 lg:gap-20 z-40 flex flex-col lg:ml-auto">
            <header className="flex justify-between items-center h-6">
              <button 
                className="flex cursor-pointer"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                <div className=' h-5 w-2.5  bg-brand-100  rounded-l-full dark:bg-brand-900 border-l-2 border-t-2 border-b-2 dark:border-brand-100'/>
                <div className=' h-5 w-2.5   bg-brand-900 rounded-r-full dark:bg-brand-100  '/>
              </button>

            
                {/* Menu */}
                <button 
                  className='flex flex-col gap-1 place-items-center hover:bg-amber-400 cursor-pointer'
                  onClick={() => setDropDown(prev => !prev)}
                >
                  <div className= { 'w-10 h-0.5 bg-brand-900 dark:bg-brand-50'}/>
                  <div className={ 'w-8 h-0.5 bg-brand-900 dark:bg-brand-50'}/>
                  <div className={ 'w-10 h-0.5 bg-brand-900 dark:bg-brand-50'}/>
                </button>
              
            </header>

            <div className="text-5xl font-black flex flex-col items-center lg:items-center gap-8">
              <div>Home</div>
              <div>About me</div>
              <div>Projects</div>
              <div>Contact</div>
              <div>Resume</div>
            </div>

            <div className=" flex-1 flex items-end justify-around lg:justify-around">
                <Twitter className="dark:text-brand-50" size={48} />
                <Linkedin className="dark:text-brand-50" size={48}/>
                <Instagram  className="dark:text-brand-50" size={48}/>
            </div>
          </div>
        }


      </div>
   </div>
  );
}
