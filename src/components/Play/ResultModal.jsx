
import { RotateCcw } from "lucide-react";

const ResultModal = ({
    isOpen,
    gameWon,
    secretWord,
    currentRow,
    resetGame,
}) => {
    const score = gameWon
        ? ({ 1: 100, 2: 80, 3: 60, 4: 40, 5: 25, 6: 10 }[currentRow] || 0)
        : 0;

    if (!isOpen) {
        return null;
    }

    return (
        <div className="animate-overlay fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
            <div className="animate-modal w-[90%] max-w-md rounded-2xl border border-purple-400/30 bg-[#171329] p-6 text-white shadow-2xl shadow-purple-900/30">

                {/* Result Badge */}
                <div className="mb-4 flex justify-center">
                    <span
                        className={`rounded-full px-4 py-1.5 text-xs font-bold tracking-widest ${gameWon
                                ? "bg-green-400/15 text-green-400"
                                : "bg-red-400/15 text-red-400"
                            }`}
                    >
                        {gameWon ? "GAME WON" : "GAME OVER"}
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-center font-wordly text-4xl font-bold text-purple-300">
                    {gameWon ? "Brilliant!" : "Nice Try!"}
                </h2>

                <p className="mt-2 text-center text-sm text-gray-400">
                    {gameWon
                        ? "You cracked the word!"
                        : "Better luck next time!"}
                </p>

                {/* Secret Word */}
                <div className="mt-6">
                    <p className="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-gray-400">
                        The Word Was
                    </p>

                    <div className="flex justify-center gap-2">
                        {secretWord.split("").map((letter, index) => (
                            <div
                                key={index}
                                className={`flex h-11 w-11 items-center justify-center rounded-lg border font-wordly text-xl font-bold ${gameWon
                                        ? "border-green-400/50 bg-green-500 text-white"
                                        : "border-purple-400/30 bg-purple-500/15 text-purple-200"
                                    }`}
                            >
                                {letter}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-purple-400/15 bg-[#211A35] p-4 text-center">
                        <p className="font-wordly text-3xl font-bold text-purple-300">
                            {score}
                        </p>
                        <p className="mt-1 text-xs font-semibold tracking-wider text-gray-400">
                            YOUR SCORE
                        </p>
                    </div>

                    <div className="rounded-xl border border-cyan-400/15 bg-[#211A35] p-4 text-center">
                        <p className="font-wordly text-3xl font-bold text-cyan-300">
                            {currentRow}/6
                        </p>
                        <p className="mt-1 text-xs font-semibold tracking-wider text-gray-400">
                            ATTEMPTS
                        </p>
                    </div>
                </div>

                {/* Play Again */}
                <button
                    onClick={resetGame}
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 py-3 font-bold tracking-wide text-white shadow-lg shadow-purple-900/30 transition duration-200 hover:scale-[1.02] hover:from-purple-500 hover:to-violet-400 active:scale-95 cursor-pointer"
                >
                    <RotateCcw size={18} />
                    PLAY AGAIN
                </button>
            </div>
        </div>
    );
};

export default ResultModal;
