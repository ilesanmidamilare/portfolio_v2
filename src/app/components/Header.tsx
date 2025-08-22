import Image from 'next/image'
import React from 'react'
import Logo from '../../../public/assets/logos/logo.svg'

function Header() {
  return (
    
    <div className='flex place-items-center'>
        <div className=''>
          <Image
              src={Logo}
              width={30}
              height={30}
              alt="Picture of the author"
            />
        </div>
        <div className='flex place-items-center ml-auto'>
          <div className='hidden lg:flex gap-6 '>
              <div className='font-bold'>Scroll To Navigate</div>
              <div className='flex'>
                <div className=' h-6 w-3 bg-red-800 rounded-l-full'></div>
                <div className=' h-6 w-3 bg-black rounded-r-full'></div>
              </div>
          </div>
          <div className='flex flex-col gap-1 place-items-center '>
            <div className='w-10 h-0.5 bg-black'/>
            <div className='w-8 h-0.5 bg-black'/>
            <div className='w-10 h-0.5 bg-black'/>
          </div>
        </div>
        
    </div>
  )
}

export default Header