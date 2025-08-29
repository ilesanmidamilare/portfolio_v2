import React from 'react'

export function Caurosel() {
  return (
    <div className="relative w-[400px] h-[300px] overflow-hidden">
    <div className="flex transition-transform duration-500 h-full"
        style={{ transform: 'translateX(-100%)' }}>
        <div className="w-full h-full flex-shrink-0 bg-blue-500">Item 1</div>
        <div className="w-full h-full flex-shrink-0 bg-red-500">Item 2</div>
        <div className="w-full h-full flex-shrink-0 bg-green-500">Item 3</div>
        <div className="w-full h-full flex-shrink-0 bg-purple-500">Item 4</div>
    </div>
    </div>
  )
}

export default Helpout