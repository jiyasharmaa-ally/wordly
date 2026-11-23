import React from 'react'

const Block = ({letter}) => {
    return (
        <div className='shrink-0 w-14 h-14 sm:w-12 sm:h-12 lg:w-14 lg:h-14
            flex items-center justify-center 
            rounded-xl
            border border-white/50
            bg-linear-to-br from-slate-400 via-slate-500 to-slate-700
            text-white text-4xl font-wordly font-bold
            shadow-[0_4px_8px_rgba(0,0,0,0.4),inset_0_2px_5px_rgba(255,255,255,0.4)]'>{letter}</div>
    )
}

export default Block