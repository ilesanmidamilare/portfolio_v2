import React from 'react'
import Header from "../../components/Header"
import MaxWidthWrapper from '../../components/MaxWidthWrapper'
import { Github } from 'lucide-react';
import { Dribbble } from 'lucide-react';
import { Earth } from 'lucide-react';

function About() {
  
  return (
    <MaxWidthWrapper>

      <Header/>
      
      <div className='font-bold mb-4  mt-12'>About me</div>
      <div className='bg-brand-100 gap-12 flex flex-col  overflow-y-scroll scrollbar-hide h-100 p-8 rounded-xl'>
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

      <div className='flex gap-4  bg-red-900 flex-1 h-full'>
        <div className='h-10 w-20 bg-amber-400'></div>
        <div className='h-10 w-20 bg-amber-400'></div>
        <div className='h-10 w-20 bg-amber-400'></div>
      </div>
    </MaxWidthWrapper>
  )
}

export default About