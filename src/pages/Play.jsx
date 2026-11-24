import Nav from "../components/home/Nav"
import GameGrid from "../components/Play/GameGrid"
import GameHeader from "../components/Play/GameHeader"
import Keyboard from "../components/Play/Keyboard"
import useWordly from "../hooks/useWordly"

const Play = () => {
    const game = useWordly()
    return (
        <div className="flex flex-col gap-4 min-w-0">
            <Nav />
            <GameHeader />
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
                <div className="min-w-0 flex justify-center">
                    <GameGrid
                        currentGuess={game.currentGuess}
                        currentRow={game.currentRow}
                        guesses={game.guesses}
                        guessResults={game.guessResults}
                    />
                </div>

                <div className="min-w-0 flex justify-center">
                    <Keyboard
                        addLetter={game.addLetter}
                        removeLetter={game.removeLetter}
                        submitGuess={game.submitGuess}
                        keyboardColors={game.keyboardColors}
                    />
                </div>
            </div>
        </div>
    )
}

export default Play