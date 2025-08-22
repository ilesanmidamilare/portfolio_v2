"use client";

import Image from "next/image";
import Logo from '../../public/assets/logos/logo.svg'
import Twitter from "../../public/assets/logos/twitter.svg"
import Instagram from "../../public/assets/logos/instagram.svg"
import Linkedin from "../../public/assets/logos/linkedin.svg"
import ForwardIcon from "../../public/assets/forwardicon.svg"
import Dropdown from "./components/Dropdown";
import { useState  } from "react";

export default function Home() {
  const [dropDown, setDropDown] = useState(false);
  return (
    <div className="p-4 h-[100dvh] w-screen relative  flex lg:pl-10 lg:pr-10 lg:pt-10">

      {/* //Just a container */}
      <div className="flex flex-col w-full max-w-480">
        <header className="flex">
          <Image
              src={Logo}
              width={20}
              height={20}
              alt="damilare ilesanmi logo"
            />
            <div  className="flex place-items-center ml-auto gap-41 ">

                {/* scroll an theme */}
                <div className="hidden lg:flex place-items-center gap-6">
                  <div className='font-bold text-black text-lg'>Scroll To Navigate</div>
                  <div className='flex'>
                    <div className=' h-5 w-2.5 bg-gray-500 rounded-l-full'/>
                    <div className=' h-5 w-2.5 bg-black rounded-r-full'/>
                  </div>
                </div>


                <div className="">
                  <div
                    className='flex flex-col gap-1 place-items-center relative'
                    onClick={() => setDropDown(prev => !prev)}
                    
                  >
                    <div className= { dropDown ? 'w-10 h-0.5 bg-blue-500' :'w-10 h-0.5 bg-black'}/>
                    <div className={ dropDown ? 'w-8 h-0.5 bg-red-500' :'w-8 h-0.5 bg-black'}/>
                    <div className={ dropDown ? 'w-10 h-0.5 bg-red-500' :'w-10 h-0.5 bg-black'}/>
                  </div>
                </div>
                
            </div>
        </header>

        {
          dropDown && 
          <div className="absolute w-full lg:w-1/3 h-full bg-gray-300 top-0, left-0 right-0 bottom-0 p-4 lg:p-10 gap-10 lg:gap-20 z-40 flex flex-col lg:ml-auto">
            <header className="flex">
                <div className='flex'>
                  <div className=' h-5 w-2.5 bg-gray-500 rounded-l-full'/>
                  <div className=' h-5 w-2.5 bg-black rounded-r-full'/>
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

            <div className="text-5xl font-black flex flex-col items-center lg:items-center gap-6">
              <div>Home</div>
              <div>About me</div>
              <div>Projects</div>
              <div>Contact</div>
              <div>Resume</div>
            </div>

            <div className=" flex-1 flex items-end justify-around lg:justify-around">
              <Image
                src={Twitter}
                width={30}
                height={30}
                alt="Twitter logo"
                
              />
              <Image
                src={Linkedin}
                width={30}
                height={30}
                alt="linkedin logo"
                
              />
              <Image
                src={Instagram}
                width={30}
                height={30}
                alt="Instagram logo"
                />
          </div>
          </div>
        }
        
          {/* //mobile */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full m-auto max-w-[400px] p-4 lg:hidden">
            
            <div className=" bg-amber-900 w-full aspect-square "/>
           
            <div className="flex gap-6 mt-4">
              <div className="text-xl">See more <span className="font-black ">About Me</span> </div>
              <Image
                src={ForwardIcon}
                alt="Forward Icon"
              />
            </div>
          </div>

           <div className=" flex-1 flex items-end justify-around lg:hidden">
              <Image
                src={Twitter}
                width={30}
                height={30}
                alt="Twitter logo"
                
              />
              <Image
                src={Linkedin}
                width={30}
                height={30}
                alt="linkedin logo"
                
              />
              <Image
                src={Instagram}
                width={30}
                height={30}
                alt="Instagram logo"
                />
          </div>
          

          {/* //Large screen */}

          <div className="relative w-full h-full hidden lg:flex ">
              {/* Background box */}
              <div className="w-full h-1/2 absolute bottom-0 left-0 flex">
                <div className=" h-full w-1/15 relative">
                  <div className=" h-5/7 w-full absolute top-1/2 right-0 -translate-y-1/2 flex flex-col justify-end">
                    <Image
                      src={Twitter}
                      width={20}
                      height={20}
                      alt="Twitter logo"
                      className="mb-4"
                    />
                    <Image
                      src={Linkedin}
                      width={20}
                      height={20}
                      alt="linkedin logo"
                      className="mb-4"
                    />
                    <Image
                      src={Instagram}
                      width={20}
                      height={20}
                      alt="Instagram logo"
                    />
                  </div>
                  
                </div>
                
                <div className="flex-[2] relative">
                  <div className="bg-gray-400 h-full w-1/2"></div>
                  <div className=" h-5/7 w-3/5 absolute top-1/2 right-0 -translate-y-1/2  z-20 flex gap-6">
                    <div className="bg-black w-1/2 h-full"></div>

                    {/* second div */}
                    <div className="w-1/2 h-full flex flex-col justify-end gap-6">
                     
                      <div className="text-[16px]">
                        Hi, My  name is <span className="font-black">Damilare Ilesanmi</span>. I am frontend developer, UX architect, and JavaScript engineer. I build scalable web and mobile application.
                      </div>
                      <div className="flex gap-6">
                        <div className="text-[16px]">See more <span className="font-black">About Me</span> </div>
                        <Image
                          src={ForwardIcon}
                          alt="Forward Icon"
                          width={20}
                          height={20}
                        />
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
