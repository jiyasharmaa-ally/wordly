import React from 'react'
import { Gamepad2 } from 'lucide-react'
const Howtoplay = () => {
  return (
    <div className='relative'>
        <div className="flex w-fit px-6 py-1  mx-auto justify-center  gap-3 border-2 border-transparent rounded-4xl items-center [background:linear-gradient(#111326,#111326)_padding-box,linear-gradient(to_right,#c084fc,#22d3ee)_border-box]">
                <Gamepad2 size={40} />
                <div className="font-wordly text-[#C084FC] uppercase font-bold text-xl max-[400px]:text-lg lg:text-3xl">
                    How To Play
                </div>
            </div>
            <div className="absolute lg:block hidden  w-10 h-10">
                <span className="absolute w-1.5 h-5 bg-yellow-400 rounded-full rotate-130 lg:-top-15 lg:left-110"></span>
                <span className="absolute w-1.5 h-5 bg-yellow-400 rounded-full rotate-90 -top-11 left-108"></span>
                <span className="absolute w-1.5 h-5 bg-yellow-400 rounded-full rotate-60 -top-7 left-110"></span>
            </div>
    </div>
  )
}

export default Howtoplay