"use client"

import React, { useEffect, useState } from 'react'
import Header from "../../components/Header"
import MaxWidthWrapper from '../../components/MaxWidthWrapper'
import { Github } from 'lucide-react';
import { Dribbble } from 'lucide-react';
import { Earth } from 'lucide-react';
import Image from 'next/image';
import { useMotionValue, animate } from 'motion/react';
import useMeasure from "react-use-measure"
import { motion } from "motion/react"
import Card from '@/app/components/Card';
// import { animate } from 'motion';

function About() {
   const skills = [
    "reactjs",
    "typescript",
    "tailwindcss",
    "expo",
    "nodejs",
    "mongodb",
    "nextjs",
    "figma",
    "expo",
    "postgresql"
  ];

  const FAST_DURATION = 25

  const SLOW_DURATION = 15
  

  const [duration, setDuration] = useState(FAST_DURATION)
  const [ref, {width}] = useMeasure()
  const xTranslation = useMotionValue(0)
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false)

useEffect(() => { 
  let controls;
  const finalPosition = - width / 2 ;

  if(mustFinish) {
     controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
      ease: "linear",
      duration: duration * (1 - xTranslation.get() / finalPosition),
      onComplete: ()  => {
          setMustFinish(false)
          setRerender(!rerender)
      },
      repeat: Infinity,      
      repeatType: "loop",
      repeatDelay: 0,
     })
  } else {
     controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: duration,
      repeat: Infinity,      
      repeatType: "loop",
      repeatDelay: 0,
  });
  }

   

  return () => {
    controls?.stop();
  };
}, [xTranslation, width, duration, rerender, mustFinish]);

  
  return (
    <MaxWidthWrapper>

      <Header/>
      
      <div className='font-bold mb-4  mt-12'>About me</div>
      <div className='bg-brand-100 gap-12 flex flex-col  overflow-y-scroll no-scrollbar h-100 p-8 rounded-xl'>
        <div>
          <div className='font-black text-2xl mb-3'>Engineering</div>
          <div className='gap-4 flex flex-col'>
            <div>B scroll animation is a visual element that appears on a website as a user scrolls down the page.</div>
            <div className='flex place-items-center gap-2'>
              <div className='font-bold'>Vew Dribble</div>
              <Github size={16}/>
            </div>
          </div>
          
        </div>

        <div className='h-3 w-full bg-amber-400 '></div>

        <div>
          <div className='font-black text-2xl mb-3'>Engineering</div>
          <div className='gap-4 flex flex-col'>
            <div>A scroll animation is a visual element that appears on a website as a user scrolls down the page.</div>
            <div className='flex place-items-center gap-2'>
              <div className='font-bold'>Vew Dribble</div>
              <Github size={16}/>
            </div>
          </div>
          
        </div>

        <div>
          <div className='font-black text-2xl mb-3'>Engineering</div>
          <div className='gap-4 flex flex-col'>
            <div>A scroll animation is a visual element that appears on a website as a user scrolls down the page.</div>
            <div className='flex place-items-center gap-2'>
              <div className='font-bold'>Vew Dribble</div>
              <Github size={16}/>
            </div>
          </div>
          
        </div>
      </div>


      <div className=' left-0 flex gap-4'>
        {
          [...skills, ...skills].map((item, idx) => (
            <Card image={item} key={idx}/>
          ))
        }
      </div>

      {/* <motion.div 
        className='border-2 overflow-hidden'
      >
        <motion.div
          className='flex gap-12 whitespace-nowrap  w-24 h-24' ref={ref} style={{x: xTranslation}}
          onHoverStart={() => setDuration(FAST_DURATION)}
          onHoverEnd={() => setDuration(SLOW_DURATION)}
        >

         {[...skills, ...skills].map((skill, index) => (
          
              <Image
                key={index}
                src = {`/assets/logos/${skill}.svg`}
                alt={skill}
                width={300}
                height={300}
                className="w-auto object-contain"
              />
           
          ))}
          </motion.div>
        
      </motion.div> */}

     
      {/* <div className='overflow-hidden'>
        <div className='flex gap-10 place-items-center whitespace-nowrap animate-[slideIn_10s_linear_infinite] hover:[animation-play-state:paused]'>
           {[...skills, ...skills].map((skill, index) => (
          
              <Image
                key={index}
                src={`/assets/logos/${skill}.svg`}
                alt={skill}
                width={400}
                height={400}
              />
           
          ))}
        </div>
      </div> */}
      
    </MaxWidthWrapper>
  )
}

export default About