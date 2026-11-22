import React from 'react'

const Star = () => {
  return (
    <div className='relative'>
      <img
        src="/images/star.png"
        className="absolute w-7 h-7 top-20 left-15 drop-shadow-[0_0_8px_rgba(168,85,247,0.9)] animate-sparkle"
        alt=""
      />
    </div>
  )
}

export default Star