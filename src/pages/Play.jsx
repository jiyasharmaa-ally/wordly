import { useState } from "react";
import Nav from "../components/home/Nav"
import GameGrid from "../components/Play/GameGrid"
import GameHeader from "../components/Play/GameHeader"
import Keyboard from "../components/Play/Keyboard"
import ResultModal from "../components/Play/ResultModal"
import useWordly from "../hooks/useWordly"

const Play = () => {
    const [isToastClosing, setIsToastClosing] = useState(false);
    const game = useWordly()
    return (
        <div className="flex flex-col gap-4 min-w-0">
            <Nav />
            <GameHeader
                resetGame={game.resetGame}
                currentRow={game.currentRow}
                getHint={game.getHint}
                hintUsed={game.hintUsed}
            />
            <div className="text-center text-white">
                {game.gameWon ? "Congratulations you won the game" : game.gameLost ? "Game over, the word was apple" : ""}
            </div>


            <div className="
                grid grid-cols-1 lg:grid-cols-[2fr_3fr]
                items-center gap-6
                w-full max-w-[1500px]
                mx-auto
                px-6 lg:px-12 xl:px-16
            ">

                {game.isWordLoading && (
                    <p className="text-center text-purple-300 animate-pulse">
                        Loading new word...
                    </p>
                )}
                <div className="min-w-0 flex justify-center">
                    <GameGrid
                        currentGuess={game.currentGuess}
                        currentRow={game.currentRow}
                        guesses={game.guesses}
                        guessResults={game.guessResults}
                    />
                </div>
                {(game.error || game.hintMessage) && (
                    <div
                        className={`fixed right-55 top-54 z-50 -translate-x-1/2 rounded-xl border px-6 py-3 shadow-lg animate-overlay ${game.hintMessage
                                ? "border-purple-400/30 bg-[#251522]"
                                : "border-red-400/30 bg-[#251522]"
                            }`}
                    >
                        <p
                            className={`whitespace-nowrap text-sm font-semibold ${game.hintMessage ? "text-yellow-400" : "text-red-400"
                                }`}
                        >
                            {game.hintMessage || game.error}
                        </p>
                    </div>
                )}
                {game.isChecking && (
                    <p className="text-center text-sm text-purple-300 animate-pulse">
                        Checking word...
                    </p>
                )}

                <div className="min-w-0 flex justify-center">
                    <Keyboard
                        addLetter={game.addLetter}
                        removeLetter={game.removeLetter}
                        submitGuess={game.submitGuess}
                        keyboardColors={game.keyboardColors}
                        isChecking={game.isChecking}
                        isWordLoading={game.isWordLoading}
                    />
                </div>
            </div>
            <ResultModal
                isOpen={game.gameWon || game.gameLost}
                gameWon={game.gameWon}
                secretWord={game.secretWord}
                currentRow={game.currentRow}
                resetGame={game.resetGame}
            />
        </div>
    )
}

export default Play