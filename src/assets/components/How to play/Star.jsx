import React from 'react'

const Star = () => {
  return (
    <div className='relative'>
      <img
        src="/images/star.png"
        className="absolute lg:w-7 lg:h-7 h-5 w-5 lg:top-15 lg:left-15 top-5 left-8 drop-shadow-[0_0_8px_rgba(168,85,247,0.9)] animate-sparkle"
        alt=""
      />
    </div>
  )
}

export default Star