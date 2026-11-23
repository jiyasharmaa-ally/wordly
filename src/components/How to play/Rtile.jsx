

const Rtile = () => {
    return (
        <div>
            <div className="
    lg:w-25 lg:h-25 w-12 h-12
    flex items-center justify-center
    lg:rounded-4xl rounded-2xl
    border border-yellow-300/60
    bg-linear-to-br from-yellow-400 via-yellow-500 to-yellow-700
    text-white lg:text-7xl text-4xl font-wordly font-bold
    [text-shadow:0_3px_5px_rgba(0,0,0,0.3),0_0_12px_rgba(234,179,8,0.5)]
    rotate-20
    shadow-[0_8px_0_#A16207,0_14px_20px_rgba(234,179,8,0.35),0_0_30px_rgba(234,179,8,0.2),inset_0_3px_8px_rgba(255,255,255,0.45),inset_0_-8px_12px_rgba(0,0,0,0.2)]
     animate-float
transition-transform duration-100
hover:rotate-0
    absolute 	lg:top-[20%] lg:right-[8%] top-[-15%] right-[5%]
">
                R
            </div>
            <div className='relative'>
      <img
        src="/images/star.png"
        className="lg:block hidden absolute w-7 h-7 -top-10 right-55 drop-shadow-[0_0_8px_rgba(168,85,247,0.9)] animate-sparkle"
        alt=""
      />
    </div>
    <div className='relative'>
      <img
        src="/images/star.png"
        className="absolute lg:w-7 lg:h-7 h-5 w-5 top-15 right-1 drop-shadow-[0_0_8px_rgba(168,85,247,0.9)] animate-sparkle"
        alt=""
      />
    </div>
        </div>
    )
}

export default Rtile