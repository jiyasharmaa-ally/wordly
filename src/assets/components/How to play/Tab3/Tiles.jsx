import React from 'react'

const Tiles = ({num}) => {
  return (
    
        <div className='shrink-0 w-12 h-12 sm:w-12 sm:h-12 lg:w-13 lg:h-13
            flex items-center justify-center 
            rounded-xl
            border border-white/50
            bg-linear-to-br from-slate-400 via-slate-500 to-slate-700
            text-white text-4xl font-wordly font-bold
            shadow-[0_4px_8px_rgba(0,0,0,0.4),inset_0_2px_5px_rgba(255,255,255,0.4)]'>{num}</div>
    )

}

export default Tiles