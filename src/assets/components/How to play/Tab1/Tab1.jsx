import React from 'react'
import Alphabet from './Alphabet'

const Tab1 = () => {
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
            <div className="flex items-center gap-3">
                <span className="
                    shrink-0
                    px-3 py-1
                    bg-purple-400
                    rounded-2xl
                    text-black font-bold text-2xl
                ">
                    01
                </span>

                <p className="font-wordly text-3xl font-bold tracking-wide">
                    Make your guess
                </p>
            </div>

            {/* Description */}
            <p className="
                font-wordly text-xl
                text-center -mt-1
            ">
                Type any valid five-letter word.
            </p>

            {/* Yellow decorative strips */}
            <div className="absolute top-[46%] right-[8%] w-10 h-10">
                <span className="absolute w-1.5 h-5 bg-yellow-400 rounded-full rotate-12 -top-6 left-4"></span>
                <span className="absolute w-1.5 h-5 bg-yellow-400 rounded-full rotate-45 -top-5 left-8"></span>
                <span className="absolute w-1.5 h-5 bg-yellow-400 rounded-full rotate-75 -top-1 left-10"></span>
            </div>

            {/* Letter tiles */}
            <div className="absolute  left-0 w-full">
                <Alphabet letters={["S", "T", "A", "R", "E"]} />
            </div>

        </section>
    )
}

export default Tab1