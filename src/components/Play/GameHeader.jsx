
import { Calendar, Lightbulb, ChartColumnBig, RotateCcw } from "lucide-react"

const GameHeader = ({resetGame, currentRow}) => {
    return (
        <section className="text-white flex justify-center px-4">
            <div className="flex items-center justify-center gap-5 lg:gap-10 flex-wrap">

                {/* DAILY WORD */}
                <div className="
                    flex items-center justify-center gap-3
                    h-[58px] px-7
                    border border-purple-400
                    rounded-full
                    bg-purple-500/10
                    shadow-[inset_0_0_12px_rgba(192,132,252,0.25),0_0_12px_rgba(192,132,252,0.2)]
                ">
                    <Calendar size={25} />
                    <span className="font-wordly text-2xl tracking-wide">
                        Daily Word
                    </span>
                </div>

                {/* ATTEMPTS */}
                <div className="
                    flex items-center justify-center
                    h-[58px] px-8
                    border border-purple-400
                    rounded-full
                    bg-purple-500/10
                    shadow-[inset_0_0_12px_rgba(192,132,252,0.25),0_0_12px_rgba(192,132,252,0.2)]
                ">
                    <span className="text-2xl font-wordly tracking-wide">
                        Attempt {currentRow + 1} / 6
                    </span>
                </div>

                {/* HINT */}
                <div className="relative">
                    <button className="
                        flex items-center justify-center
                        w-[60px] h-[58px]
                        border border-purple-400
                        rounded-full
                        text-yellow-400 cursor-pointer
                        bg-purple-500/10
                        shadow-[inset_0_0_12px_rgba(192,132,252,0.25),0_0_12px_rgba(192,132,252,0.2)]
                    ">
                        <Lightbulb size={28} />
                    </button>

                    {/* HINT COUNT */}
                    <span className="
                        absolute -top-2 -right-2
                        flex items-center justify-center
                        w-7 h-7
                        rounded-full
                        bg-[#be41f7]
                        font-wordly text-lg
                    ">
                        3
                    </span>
                </div>

                 <button onClick={resetGame} className="
                    flex items-center justify-center
                    w-[60px] h-[58px]
                    border border-purple-400
                    rounded-full cursor-pointer
                    bg-purple-500/10
                    shadow-[inset_0_0_12px_rgba(192,132,252,0.25),0_0_12px_rgba(192,132,252,0.2)]
                ">
                    <RotateCcw  size={28} />
                </button>

                {/* STATS */}
                <button className="
                    flex items-center justify-center
                    w-[60px] h-[58px]
                    border border-purple-400
                    rounded-full cursor-pointer
                    bg-purple-500/10
                    shadow-[inset_0_0_12px_rgba(192,132,252,0.25),0_0_12px_rgba(192,132,252,0.2)]
                ">
                    <ChartColumnBig size={28} />
                </button>

            </div>
        </section>
    )
}

export default GameHeader
