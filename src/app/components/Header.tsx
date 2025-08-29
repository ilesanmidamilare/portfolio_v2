"use client";

import { useState, useEffect  } from "react";
import Logo from "../../../public/assets/svgs/Logo"
import { Twitter } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Instagram } from "lucide-react";
import Link from "next/link";
import { usePathname } from 'next/navigation';


export default function Home() {
  const [dropDown, setDropDown] = useState(false);
  const [theme, setTheme] = useState("light");
  const pathname = usePathname();
  console.log(pathname)
  if(pathname === '/'){
    console.log('Home')
  } else {
    console.log('Not Home')
  }

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
    <header className="flex justify-between items-center  h-6">
      {/* <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
          />
      </div> */}
      <Logo className='w-6 h-6 text-brand-900 dark:text-brand-50 cursor-pointer'/>

      {/* //Wrapper (scroll nav, theme-changer & menu) */}
      <div className="flex justify-end lg:w-1/3 items-center">
        {/* //Scroll navigation and theme-Changer */}
        { pathname === '/' && 
        <div className=" gap-4 mr-auto hidden lg:flex ">
          <div className="font-bold text-[16px]">Scroll To Navigate</div>
          <button 
            className="flex cursor-pointer"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <div className=' h-6 w-3  bg-brand-100  rounded-l-full dark:bg-brand-900 border-l-2 border-t-2 border-b-2 dark:border-brand-100'/>
            <div className=' h-6 w-3   bg-brand-900 rounded-r-full dark:bg-brand-100  '/>
          </button>
        </div>}

        {/* Menu */}
        <div>
          <button 
            className='flex flex-col gap-1 items-end hover:bg-amber-400 cursor-pointer'
            onClick={() => setDropDown(prev => !prev)}
          >
            <div className= {'w-7 h-0.5 bg-brand-900 dark:bg-brand-50'}/>
            <div className={ 'w-10 h-0.5 bg-brand-900 dark:bg-brand-50'}/>
            <div className={'w-4 h-0.5 bg-brand-900 dark:bg-brand-50'}/>
          </button>

          {
            dropDown && 
            <div className="p-4 lg:p-8  absolute w-full  lg:w-1/3 h-full bg-brand-100 dark:bg-brand-800 top-0, lg:right-30 left-0 right-0 bottom-0 gap-10 lg:gap-20 z-40 flex flex-col lg:ml-auto">
              <header className="flex justify-between items-center h-6">
                <button 
                  className="flex cursor-pointer"
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                  <div className=' h-5 w-2.5  bg-brand-100  rounded-l-full dark:bg-brand-900 border-l-2 border-t-2 border-b-2 dark:border-brand-100'/>
                  <div className=' h-5 w-2.5   bg-brand-900 rounded-r-full dark:bg-brand-100  '/>
                </button>

                  <button 
                    className='flex flex-col gap-1 place-items-center hover:bg-amber-400 cursor-pointer'
                    onClick={() => setDropDown(prev => !prev)}
                  >
                    <div className= { 'w-10 h-0.5 bg-brand-900 dark:bg-brand-50'}/>
                    <div className={ 'w-8 h-0.5 bg-brand-900 dark:bg-brand-50'}/>
                    <div className={ 'w-10 h-0.5 bg-brand-900 dark:bg-brand-50'}/>
                  </button>
                
              </header>

              <div className="text-[32px] font-black flex flex-col items-center lg:items-center gap-8">
                <Link href="/">Home</Link>
                <Link href="/About">About me</Link>
                <Link href="">Projects</Link>
                <Link href="">Contact</Link>
                <Link href="">Resume</Link>
              </div>

              <div className=" flex-1 flex items-end justify-around lg:justify-around">
                  <Twitter className="dark:text-brand-50 cursor-pointer" size={32} />
                  <Linkedin className="dark:text-brand-50 cursor-pointer" size={32}/>
                  <Instagram  className="dark:text-brand-50 cursor-pointer" size={32}/>
              </div>
            </div>
          }
        </div>
      </div>
    </header>
  );
}

