import { useState } from "react";

const useWordly = () => {
    const [currentGuess, setcurrentGuess] = useState("");
    const [currentRow, setcurrentRow] = useState(0);
    const [guesses, setguesses] = useState([]);
    const [secretWord, setsecretWord] = useState("APPLE");
    const [gameWon, setgameWon] = useState(false)
    const addLetter = (letter) => {
        if(currentGuess.length < 5) {
            setcurrentGuess(currentGuess + letter)
        }
    }

    const removeLetter = () => {
        setcurrentGuess(currentGuess.slice(0, -1))
    }

    const submitGuess = () => {
        if(currentGuess.length === 5) {
            const isCorrect = checkGuess()
            if(isCorrect) {
                setgameWon(true)
            }
            setguesses([
                ...guesses,
                currentGuess
            ])
            setcurrentRow(currentRow + 1)
            setcurrentGuess("")
        }
    }
    const checkGuess = () => {
        const isCorrect = currentGuess === secretWord
        return isCorrect;
    }
    return {
        currentGuess, 
        currentRow,
        addLetter,
        removeLetter,
        submitGuess, 
        guesses,
        secretWord, 
        checkGuess, 
        gameWon
    }
}

export default useWordly