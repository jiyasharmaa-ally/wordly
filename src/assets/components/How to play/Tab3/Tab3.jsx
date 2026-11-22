import React from 'react'
import Number from './Number'

const Tab3 = () => {
  return (
    <section className="
            relative
            w-full
            h-[235px]
            p-5
            border border-purple-400/80
            rounded-3xl
            text-white
            bg-[#17172F]/60
        ">
            {/* Heading */}
            <div className="flex gap-3">
                <span className="
                    shrink-0
                    px-3 py-1
                    bg-purple-400
                    rounded-2xl
                    text-black font-bold text-2xl
                ">
                    03
                </span>

                <p className="font-wordly text-3xl font-bold tracking-wide">
                    You have 6 attempts!
                </p>
            </div>

           <Number numbers={["1", "2", "3", "4", "5", "6"]}/>

           <p className='font-wordly text-2xl text-center px-5'>Can you solve it before your guesses run out?</p>
           
        </section>
  )
}

export default Tab3