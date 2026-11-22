
import React from 'react'

const Colors = () => {
    return (
        <div className="flex flex-col gap-1.5">

            {/* Green */}
            <div className="flex items-center gap-2 w-full">

                <div className="shrink-0 font-wordly px-4 py-1 flex items-center justify-center text-white bg-green-500 rounded-xl text-2xl font-extrabold shadow-[0_0_10px_rgba(34,197,94,0.7)]">
                    S
                </div>

                <div className="flex flex-1 min-w-0 items-center gap-2 bg-gradient-to-r from-[#242044]/20 via-[#242044]/80 to-[#242044]/90 rounded-xl px-2 py-1">

                    <strong className="shrink-0 text-black px-3 rounded-3xl text-base font-wordly bg-green-500">
                        Green
                    </strong>

                    <p className="whitespace-nowrap text-white font-wordly text-base">
                        Right letter, right position!
                    </p>

                </div>
            </div>

            {/* Yellow */}
            <div className="flex items-center gap-2 w-full">

                <div className="shrink-0 font-wordly px-4 py-1 flex items-center justify-center text-white bg-yellow-500 rounded-xl text-2xl font-extrabold shadow-[0_0_10px_rgba(234,179,8,0.7)]">
                    T
                </div>

                <div className="flex flex-1 min-w-0 items-center gap-2 bg-gradient-to-r from-[#242044]/20 via-[#242044]/80 to-[#242044]/90 rounded-xl px-2 py-1">

                    <strong className="shrink-0 text-black px-3 rounded-3xl text-base font-wordly bg-yellow-500">
                        Yellow
                    </strong>

                    <p className="whitespace-nowrap text-white font-wordly text-base">
                        Right letter, wrong position!
                    </p>

                </div>
            </div>

            {/* Gray */}
            <div className="flex items-center gap-2 w-full">

                <div className="shrink-0 font-wordly px-4 py-1 flex items-center justify-center text-white bg-gray-500 rounded-xl text-2xl font-extrabold shadow-[0_0_10px_rgba(107,114,128,0.7)]">
                    A
                </div>

                <div className="flex flex-1 min-w-0 items-center gap-2 bg-gradient-to-r from-[#242044]/20 via-[#242044]/80 to-[#242044]/90 rounded-xl px-2 py-1">

                    <strong className="shrink-0 text-black px-4 rounded-3xl text-base font-wordly bg-gray-500">
                        Gray
                    </strong>

                    <p className="whitespace-nowrap  text-white font-wordly justify-start">
                        The letter isn't in the word.
                    </p>

                </div>
            </div>

        </div>
    )
}

export default Colors
