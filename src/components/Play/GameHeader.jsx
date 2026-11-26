import { Link } from "react-router-dom"
import { Calendar, Lightbulb, ChartColumnBig, RotateCcw } from "lucide-react"

const GameHeader = ({ resetGame, currentRow, getHint, hintUsed }) => {
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
                    <button
                        onClick={getHint}
                        disabled={hintUsed}
                        className={`
        flex items-center justify-center
        w-[60px] h-[58px]
        border border-purple-400
        rounded-full
        text-yellow-400
        bg-purple-500/10
        shadow-[inset_0_0_12px_rgba(192,132,252,0.25),0_0_12px_rgba(192,132,252,0.2)]
        transition-all duration-200
        ${hintUsed
                                ? "opacity-40 cursor-not-allowed"
                                : "cursor-pointer hover:scale-105 hover:bg-purple-500/20"
                            }
    `}
                    >
                        <Lightbulb size={28} />
                    </button>

                    
                </div>

                <button onClick={resetGame} className="
                    flex items-center justify-center
                    w-[60px] h-[58px]
                    border border-purple-400
                    rounded-full cursor-pointer
                    bg-purple-500/10
                    shadow-[inset_0_0_12px_rgba(192,132,252,0.25),0_0_12px_rgba(192,132,252,0.2)]
                ">
                    <RotateCcw size={28} />
                </button>

                {/* STATS */}
                <Link 
                to='/stats'
                className="
                    flex items-center justify-center
                    w-[60px] h-[58px]
                    border border-purple-400
                    rounded-full cursor-pointer
                    bg-purple-500/10
                    shadow-[inset_0_0_12px_rgba(192,132,252,0.25),0_0_12px_rgba(192,132,252,0.2)]
                ">
                    <ChartColumnBig size={28} />
                </Link>

            </div>
        </section>
    )
}

export default GameHeader
