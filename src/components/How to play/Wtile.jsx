import React from 'react'

const Wtile = () => {
    return (
        <div className=" w-full h-full">
            <div className="
        absolute
        lg:top-[5%] lg:left-[10%] -top-[10%] left-[5%]
        w-12 h-12 lg:w-25 lg:h-25
        flex items-center justify-center
        lg:rounded-4xl rounded-2xl
        border border-purple-300/60
        bg-linear-to-br from-purple-400 via-purple-500 to-purple-800
        text-white lg:text-7xl text-3xl font-wordly font-bold
        [text-shadow:0_3px_5px_rgba(0,0,0,0.25),0_0_12px_rgba(168,85,247,0.5)]
        -rotate-30
        shadow-[0_8px_0_#6B21A8,0_14px_20px_rgba(168,85,247,0.35),0_0_30px_rgba(168,85,247,0.2),inset_0_3px_8px_rgba(255,255,255,0.45),inset_0_-8px_12px_rgba(0,0,0,0.2)]
        animate-float
        hover:rotate-0
        transition-transform duration-100
    ">
                W
            </div>
            <div className='relative lg:block hidden'>
      <img
        src="/images/star.png"
        className="absolute w-7 h-7 top-0 left-70 drop-shadow-[0_0_8px_rgba(168,85,247,0.9)] animate-sparkle"
        alt=""
      />
    </div>
        </div>
    )
}

export default Wtile