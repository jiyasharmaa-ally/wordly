
import {Play} from "lucide-react"

const LetsPlaybutton = () => {
    return (
        <div className="flex justify-center items-center py-6">

            <div className="relative">

                <div className="absolute bottom-[2%] right-[8%]">
                    <div className="relative w-20 h-20">
                        <span className="absolute block rounded-full w-5 h-1 lg:rotate-60 rotate-120 bg-yellow-400 lg:bottom-15 lg:right-56 bottom-106 right-4 shadow-[0_0_8px_rgba(250,204,21,0.9),0_0_20px_rgba(250,204,21,0.5)]"></span>
                        <span className="absolute block rounded-full w-5 h-1 lg:rotate-34 rotate-150 bg-yellow-400 lg:top-6 lg:right-59 -top-84 -right-1 shadow-[0_0_8px_rgba(250,204,21,0.9),0_0_20px_rgba(250,204,21,0.5)]"></span>

                        <span className="absolute block rounded-full w-5 h-1 bg-yellow-400 rotate-10 lg:bottom-9.5 lg:-left-45 bottom-95 left-15 shadow-[0_0_8px_rgba(250,204,21,0.9),0_0_20px_rgba(250,204,21,0.5)]"></span>
                    </div>
                </div>
                {/* Main button */}
                <button className="
                    relative
                    flex items-center justify-center gap-5
                    px-6 py-2
                    rounded-full
                    bg-gradient-to-b from-[#e879ff] via-[#b51cff] to-[#7200db]
                    border border-purple-300/70
                    shadow-[0_5px_0_#5200a8,0_0_15px_#bd35ff,0_0_35px_rgba(168,35,255,0.6),inset_0_3px_5px_rgba(255,255,255,0.6)]
                    hover:scale-105
                    active:scale-95
                    transition-transform duration-200
                    play-glow
                ">

                    <Play
                        size={40}
                        strokeWidth={3}
                        fill="white"
                        className="text-white drop-shadow-[0_3px_3px_rgba(0,0,0,0.3)]"
                    />

                    {/* Button text */}
                    <span className="text-white text-2xl font-extrabold tracking-wide drop-shadow-[0_3px_3px_rgba(50,0,100,0.5)]">
                        LET'S PLAY!
                    </span>

                </button>

                {/* Right purple sparkle */}
                <span className="absolute animate-sparkle -right-12 top-4 text-purple-400 text-3xl sparkle-right">
                    ✦
                </span>

            </div>
        </div>
    )
}

export default LetsPlaybutton
