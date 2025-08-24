"use client";

import { useState, useEffect  } from "react";
import Logo from "../../public/assets/svgs/Logo"
import { Twitter } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Instagram } from "lucide-react";
import { MoveRight } from 'lucide-react';
import MaxWidthWrapper from '../../src/app/components/MaxWidthWrapper'
import Header from "./components/Header"


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
      <MaxWidthWrapper>
        {/* //header */}
        <Header/>
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
                  leading-[0.8]
                ">
                  <div className="">Software</div>
                  <div className="">Engineer & Designer</div>
                </div>
              </div>

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
                    <div className="w-1/2 flex flex-col justify-end gap-4">
                     
                      <div className="text-[16px]">
                        Hi, My  name is <span className="font-black">Damilare Ilesanmi</span>. I am frontend developer, UX architect, and JavaScript engineer. I build scalable web and mobile application.
                      </div>
                      <div className="flex gap-6 items-center -mb-2">
                        <div className="text-[16px]">See more <button className="font-black cursor-pointer">About Me</button> </div>
                        <MoveRight className="dark:text-brand-50 " size={32}/>
                      </div>
                     
                    </div>
                  </div>
                </div>

               
              </div>
          </div>
      </MaxWidthWrapper>
   </div>
  );
}

// xl:text-[clamp(120px,calc(120px+64*((100vw-1280px)/(1920-1280))),184px)]