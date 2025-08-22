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
  
    // <div className="h-[100dvh] w-screen  flex flex-col gap-30  items-center pl-10 pr-10 pt-10">
    //   {/* bg-gradient-to-r from-blue-500 to-indigo-700 */}
      
    //   {/* fixed top-0 left-1/2 transform -translate-x-1/2 */}
      
    //   <header className=" w-full flex lg:max-w-480 ">
    //   {/* lg:max-w-480 mx-auto */}
    //     <Image
    //         src={Logo}
    //         width={30}
    //         height={30}
    //         alt="damilare ilesanmi logo"
    //       />
    //       <div  className="flex place-items-center ml-auto gap-41 ">
    //           <div className="hidden lg:flex place-items-center gap-6">
    //             <div className='font-bold text-black text-2xl'>Scroll To Navigate</div>
    //             <div className='flex'>
    //               <div className=' h-6 w-3 bg-gray-500 rounded-l-full'/>
    //               <div className=' h-6 w-3 bg-black rounded-r-full'/>
    //             </div>
    //           </div>

    //           <div className='flex flex-col gap-1 place-items-center '>
    //             <div className='w-10 h-0.5 bg-black'/>
    //             <div className='w-8 h-0.5 bg-black'/>
    //             <div className='w-10 h-0.5 bg-black'/>
    //           </div>
    //       </div>
    //   </header>

    //    <main className="flex flex-col flex-1 max-w-480">
    //     <div className="font-black   
    //         text-[clamp(28px,calc(28px+92*((100vw-320px)/(1280-320))),120px)]
    //         xl:text-[clamp(120px,calc(120px+64*((100vw-1280px)/(1920-1280))),184px)]
    //         leading-[0.8]
    //         w-full
    //         whitespace-nowrap
    //         -mb-12
    //         z-10
    //     ">
    //       <div>Software</div>
    //       <div>Engineer & Designer</div>
    //     </div>

    //     <div className="flex h-full gap-8" >
    //       <div className="self-end mb-25 w-10">
    //         <Image
    //             src={Twitter}
    //             // width={30}
    //             // height={30}
    //             alt="Twitter logo"
    //             
    //           />
    //           <Image
    //             src={Linkedin}
    //             // width={30}
    //             // height={30}
    //             alt="linkedin logo"
    //             className="mb-6"
    //           />
    //           <Image
    //             src={Instagram}
    //             // width={30}
    //             // height={30}
    //             alt="Instagram logo"
    //           />
    //       </div>

    //       <div>
    //         <div className="w-5xl h-full  ml-20 relative">
    //           <div className="bg-gray-400 h-full w-5/7"></div>
    //           <div className="h-80 w-100 bg-black absolute top-1/2 right-0 -translate-y-1/2  z-20"></div>
    //         </div>
    //       </div>

    //       <div className="self-end mb-25">
    //         <div className="mb-6 text-2xl">
    //           Hi, My name is <span className="font-black">Damilare Ilesanmi</span> . I am frontend developer, UX architect, and JavaScript engineer. I build scalable web and mobile application.
    //         </div>
    //         <div className="flex gap-6">
    //           <div className="text-2xl">See more <span className="font-black ">About Me</span> </div>
    //           <Image
    //             src={ForwardIcon}
    //             alt="Forward Icon"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //    </main>
    // </div>
    <div className=" h-[100dvh] w-screen p-4 relative  flex ">

      {/* //Just a container */}
      <div className="flex flex-col gap-10 w-full">
        <header className="flex">
          <Image
              src={Logo}
              width={30}
              height={30}
              alt="damilare ilesanmi logo"
            />
            <div  className="flex place-items-center ml-auto gap-41 ">

                {/* scroll an theme */}
                <div className="hidden lg:flex place-items-center gap-6">
                  <div className='font-bold text-black text-2xl'>Scroll To Navigate</div>
                  <div className='flex'>
                    <div className=' h-6 w-3 bg-gray-500 rounded-l-full'/>
                    <div className=' h-6 w-3 bg-black rounded-r-full'/>
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
          <div className="absolute w-full h-full bg-gray-300 top-0, left-0 right-0 bottom-0 p-4 gap-10 z-20">
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
        
          {/* <div className="font-black   
                text-[clamp(28px,calc(28px+92*((100vw-320px)/(1280-320))),120px)]
                xl:text-[clamp(120px,calc(120px+64*((100vw-1280px)/(1920-1280))),184px)]
                leading-[0.8]
                w-full
                whitespace-nowrap
                z-10
            ">
              <div>Software</div>
              <div>Engineer & Designer</div>
          </div> */}

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full m-auto max-w-[400px] p-4">
            
            <div className=" bg-amber-900 w-full aspect-square "/>
           
            <div className="flex gap-6 mt-4">
              <div className="text-xl">See more <span className="font-black ">About Me</span> </div>
              <Image
                src={ForwardIcon}
                alt="Forward Icon"
              />
            </div>
          </div>

           <div className=" flex-1 flex items-end justify-around">
              <Image
                src={Twitter}
                width={20}
                height={20}
                alt="Twitter logo"
                
              />
              <Image
                src={Linkedin}
                width={20}
                height={20}
                alt="linkedin logo"
                
              />
              <Image
                src={Instagram}
                width={20}
                height={20}
                alt="Instagram logo"
                />
          </div>
      </div>
    </div>
  );
}


