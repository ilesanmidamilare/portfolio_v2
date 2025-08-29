import React from 'react'
import Image from 'next/image'
import Caurol

function Slides() {
    const slides = [
        'https://i.ibb.co/ncrXc2V/1.png',
        'https://i.ibb.co/B3s7v4h/2.png',
        'https://i.ibb.co/XXR8kzF/3.png',
        'https://i.ibb.co/yg7BSdM/4.png'
    ]
  return (
   
        <div className='max-w-lg'>
            <Carousel>
                {
                    slides.map((s) => (
                        <Image 
                            src={s}
                        />
                    ))
                }
            </Carousel>
        </div>
    
  )
}

export default Slides