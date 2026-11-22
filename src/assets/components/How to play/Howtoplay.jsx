import React from 'react'
import { Gamepad2 } from 'lucide-react'
const Howtoplay = () => {
  return (
    <div>
        <div className="flex w-fit px-6 py-1  mx-auto justify-center  gap-3 border-2 border-transparent rounded-4xl items-center [background:linear-gradient(#111326,#111326)_padding-box,linear-gradient(to_right,#c084fc,#22d3ee)_border-box]">
                <Gamepad2 size={40} />
                <div className="font-wordly text-[#C084FC] uppercase font-bold text-2xl max-[400px]:text-lg lg:text-3xl">
                    How To Play
                </div>
            </div>
    </div>
  )
}

export default Howtoplay