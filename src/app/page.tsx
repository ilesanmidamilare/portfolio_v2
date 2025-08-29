"use client"

import React, { useState } from 'react'
import Logo from '../../public/assets/svgs/Logo'
import { motion, Variants } from 'motion/react'
import Link from 'next/link';
import { Twitter } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Instagram } from "lucide-react";
import { MoveRight } from 'lucide-react';
import {homeData } from "./constant/index"
import Image from 'next/image';

const Page = () => {
  const [clicked, setClicked] = useState(false)

  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  
  return (
    <div className='h-[100dvh] w-screen flex flex-col'>
          
          <header className='flex h-6 justify-between'>
            <Link href={'/'} passHref>
              <Logo className={'w-6 h-auto'} fill={'red'}/>
            </Link>
                  
          
            <motion.button 
                className='flex flex-col gap-1 items-end cursor-pointer justify-center hover:bg-brand-orange'
                onClick={() => setClicked(!clicked)}
                // whileHover={{ scale: 1.1 }}
                // whileTap={{ scale: 0.9 }}
                // transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                
                className= { 'w-8 h-0.5 bg-brand-dark-gray dark:bg-light-gray'}
                  initial={{
                    translateY: 0
                  }}
                  animate={{
                    translateY: clicked ? 4 : 0,
                    opacity: clicked ? 0 : 1
                  }}
    
                  transition={{
                    duration: 0.5,
                    type: 'spring',
                    ease:'easeInOut'
                  }}
                  
                />
                <motion.div 
                    className={ 'w-10 h-0.5 bg-brand-dark-gray dark:bg-light-gray'}
    
                    initial={{
                      width: '40px'
                    }}
                    animate={{
                      width: clicked ? '30px' : '40px'
                    }}
                    transition={{
                    duration: 0.5,
                    type: 'spring',
                    ease:'easeInOut'
                  }}
                />
                <motion.div 
                  className={ 'w-6 h-0.5 bg-brand-dark-gray dark:bg-light-gray'}
    
                  initial={{
                    translateY: 0
                  }}
                  animate={{
                    translateY: clicked ? -4 : 0,
                    opacity: clicked ? 0 : 1
                  }}
    
                  transition={{
                    duration: 0.5,
                    type: 'spring',
                    ease:'easeInOut'
                  }}
                />
            </motion.button>
          </header>

          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full m-auto max-w-[400px] p-4 lg:hidden  aspect-square'>
            <div className="relative w-full h-full overflow-hidden">
              <div className="flex transition-transform duration-500 h-full"
                  style={{ transform: 'translateX(-0%)' }}>

                  <div className="w-full h-full flex-shrink-0 gap-2 flex flex-col">
                    <div className="bg-brand-light-gray w-full h-full relative rounded-[16px] ">



                      <div className='flex justify-between items-center absolute bottom-0 w-full p-4'>
                        <div className='w-full '>
                          <div className='font-bold'>PAGE</div>
                          <div className='text-2xl font-black'>About me</div>
                          <div className='flex justify-between mt-2'>
                            <div className='flex gap-4  '>
                              <div className='bg-brand-orange p-1 pl-4 pr-4 rounded-[100px]'>Developer</div>
                              <div className='bg-brand-orange p-1 pl-4 pr-4 rounded-[100px]'>Designer</div>
                            </div>
                            <div className='border-4 h-8 w-8 rounded-4xl'></div>
                          </div>
                        </div>
                        
                      </div>
                    </div>


                    <div className="flex gap-2 place-items-center">
                      <h1 className="font-semibold">See more </h1>
                      <h1 className="text-brand-orange font-black capitalize">About me</h1>
                      <motion.div
                        animate={{ x: [0, 10, 0] }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          repeatType: "loop",
                          ease: "easeInOut",
                        }}
                      >
                        <MoveRight className="text-brand-orange" size={32} />
                      </motion.div>
                    </div>
                  </div>

                  <div className="w-full h-full flex-shrink-0  flex flex-col">
                    <div className="bg-brand-light-gray w-full h-full">
                    </div>

                    <div className="flex gap-2 place-items-center">
                      <h1 className="text-xl font-semibold">See more </h1>
                      <h1 className="text-brand-orange font-black capitalize">Item 2</h1>
                      <motion.div
                        animate={{ x: [0, 10, 0] }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          repeatType: "loop",
                          ease: "easeInOut",
                        }}
                      >
                        <MoveRight className="text-brand-orange" size={32} />
                      </motion.div>
                    </div>
                  </div>

                  <div className="w-full h-full flex-shrink-0 flex flex-col">
                    <div className="bg-brand-light-gray w-full h-full"></div>

                    <div className="flex gap-2 place-items-center">
                      <h1 className="text-xl font-semibold">See more </h1>
                      <h1 className="text-brand-orange font-black capitalize">Item 3</h1>
                      <motion.div
                        animate={{ x: [0, 10, 0] }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          repeatType: "loop",
                          ease: "easeInOut",
                        }}
                      >
                        <MoveRight className="text-brand-orange" size={32} />
                      </motion.div>
                    </div>
                  </div>
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-shrink-0  gap-12 items-end justify-center lg:hidden ">
            <Link passHref href="https://example.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="text-brand-black cursor-pointer" size={24} />
            </Link>
            <Link passHref href="https://example.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="text-brand-black cursor-pointer" size={24}/>
            </Link>
            <Link passHref href="https://example.com" target="_blank" rel="noopener noreferrer">
              <Instagram  className="text-brand-black cursor-pointer" size={24}/>
            </Link>
          </div>
     
    </div>
  )
}

export default Page 

