"use client";

import { useState, useEffect  } from "react";
import Logo from "../../public/assets/svgs/Logo"
import { Twitter } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Instagram } from "lucide-react";
import { MoveRight } from 'lucide-react';


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
   <div className="h-[100dvh] w-screen flex justify-center">

      {/* background design */}
      <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
          />
      </div>

      {/* //wrapper for the whole page */}
      <div className=" h-full max-w-480 w-full p-4  lg:p-8 flex flex-col">

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
                <Twitter className="dark:text-brand-50 cursor-pointer" size={48} />
                <Linkedin className="dark:text-brand-50 cursor-pointer" size={48}/>
                <Instagram  className="dark:text-brand-50 cursor-pointer" size={48}/>
            </div>
          </div>
        }

        {/* //mobile */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full m-auto max-w-[400px] p-4 lg:hidden">
            
            <div className=" bg-brand-500 w-full aspect-square "/>
           
            <div className="flex gap-6 mt-4">
              <div className="text-xl">See more <span className="font-black ">About Me</span> </div>
              <MoveRight className="dark:text-brand-50 " size={32}/>
            </div>
          </div>

          <div className="flex-1 flex items-end justify-around lg:hidden ">
            <Twitter className="dark:text-brand-50 cursor-pointer" size={32} />
            <Linkedin className="dark:text-brand-50 cursor-pointer" size={32}/>
            <Instagram  className="dark:text-brand-50 cursor-pointer" size={32}/>
          </div>

          {/* //Large Desktop */}
          <div className="relative w-full h-full hidden lg:flex ">
              {/* Background box */}
              <div className="w-full h-1/2 absolute bottom-0 left-0 flex">
                <div className=" h-full w-1/15 relative">
                  <div className=" h-5/7 w-full absolute top-1/2 right-0 -translate-y-1/2 flex flex-col justify-end gap-6">
                    <Twitter className="dark:text-brand-50 cursor-pointer" size={24} />
                    <Linkedin className="dark:text-brand-50 cursor-pointer" size={24}/>
                    <Instagram  className="dark:text-brand-50 cursor-pointer" size={24}/>
                  </div>
                  
                </div>
                
                <div className="flex-[2] relative">
                  <div className="bg-brand-700 h-full w-1/2"></div>
                  <div className=" h-5/7 w-3/5 absolute top-1/2 right-0 -translate-y-1/2  z-20 flex gap-6">
                    <div className="bg-brand-400 w-1/2 h-full"></div>

                    {/* second div */}
                    <div className="w-1/2 h-full flex flex-col justify-end gap-6">
                     
                      <div className="text-[16px]">
                        Hi, My  name is <span className="font-black">Damilare Ilesanmi</span>. I am frontend developer, UX architect, and JavaScript engineer. I build scalable web and mobile application.
                      </div>
                      <div className="flex gap-6 items-center">
                        <div className="text-[16px]">See more <button className="font-black cursor-pointer">About Me</button> </div>
                        <MoveRight className="dark:text-brand-50 " size={32}/>
                      </div>
                    </div>
                  </div>
                </div>

               
              </div>

              <div className="
                  w-full h-1/2 absolute 
                  top-1/2 left-1/2 
                  -translate-x-1/2 -translate-y-5/5
                  z-20 
                  sm:mt-4      /* adjust overlap on small */
                  md:mt-8     /* adjust overlap on medium */
                  lg:mt-8    /* adjust overlap on large */
                "
              >
                <div className="font-black   
                  flex
                  flex-col
                  text-nowrap
                  absolute
                  justify-end
                  w-full
                  h-full
                  text-[clamp(28px,calc(28px+92*((100vw-320px)/(1280-320))),120px)]
                  xl:text-[clamp(120px,calc(120px+64*((100vw-1280px)/(1920-1280))),184px)]
                  leading-[0.8]
                ">
                  <div className="">Software</div>
                  <div className="">Engineer & Designer</div>
                </div>
              </div>
          </div>
      </div>
   </div>
  );
}
