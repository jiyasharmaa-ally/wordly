import React from 'react'
import Colors from './colors'

const Tab2 = () => {
    return (
        <section className="
            relative
            w-full
            h-[240px]
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
                    02
                </span>

                <p className="font-wordly text-2xl font-bold tracking-wide">
                    Watch the colors
                </p>
            </div>

            {/* Description */}
            <p className="
                font-wordly text-xl
                text-center
                mt-3
            ">
                Every color gives you a clue.
            </p>
            <Colors />
        </section>
    )
}

export default Tab2