"use client"

import React, { useEffect, useState, useRef } from 'react'
import Header from "../../components/Header"
import MaxWidthWrapper from '../../components/MaxWidthWrapper'
import { Github } from 'lucide-react';
import { Dribbble } from 'lucide-react';
import { Earth } from 'lucide-react';
import Image from 'next/image';
import { useMotionValue, animate } from 'motion/react';
import useMeasure from "react-use-measure"
import { motion } from "motion/react"


const About =  () => {
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

  const [logos, setLogos] = useState(skills)
  const containerRef = useRef<HTMLDivElement>(null);
  const lastItemRef = useRef(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          console.log(entries[0].isIntersecting)
          setLogos((prev) => [
            ...prev,
            ...logos
          ]);
        }
      },
      { root: containerRef.current, threshold: 1.0 }
    );

    const lastItem = lastItemRef.current;

    if (lastItem) {
      observer.observe(lastItem);
    }

    return () => {
      if (lastItem) {
        observer.unobserve(lastItem);
      }
    };
  }, [logos])

  // 🔹 Autoplay effect
  // useEffect(() => {
  //   if (!containerRef.current) return;

  //   if (!isPaused) {
  //     intervalRef.current = setInterval(() => {
  //       if (containerRef.current) {
  //         containerRef.current.scrollBy({
  //           left: 220, // move by one slide width + gap
  //           behavior: "smooth",
  //         });
  //       }
  //     }, 2000);
  //   }

  //   return () => {
  //     if (intervalRef.current) {
  //       clearInterval(intervalRef.current);
  //     }
  //   };
  // }, [isPaused, logos]);
  
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


       <div
      ref={containerRef}
      onMouseEnter={() => setIsPaused(true)} // Pause on hover
      onMouseLeave={() => setIsPaused(false)} // Resume on hover
      style={{
        display: "flex",
        overflowX: "auto",
        scrollSnapType: "x mandatory",
        gap: "16px",
        padding: "20px",
        width: "100%",
        border: "2px solid black",
        scrollbarWidth: "none", // Firefox
        msOverflowStyle: "none", // IE/Edge
      }}
      className="no-scrollbar"
    >
      {logos.map((item, index) => {
        const isLast = index === logos.length - 1;
        return (
          <div
            key={item}
            ref={isLast ? lastItemRef : null}
            style={{
              minWidth: "100px",
              height: "75px",
              background: "tomato",
              color: "white",
              fontSize: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              scrollSnapAlign: "center",
              borderRadius: "12px",
              flexShrink: 0,
            }}
          >
            <Image 
                key={`{Math.random()} ${index}`}
                src = {`/assets/logos/${item}.svg`} 
                alt={item}
                width={50}
                height ={50}
              />
          </div>
        );
      })}
    </div>

     
      
    </MaxWidthWrapper>
  )
}

export default About
