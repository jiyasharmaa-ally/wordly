import { useState } from "react";

const useWordly = () => {
    const [currentGuess, setcurrentGuess] = useState("");
    const [currentRow, setcurrentRow] = useState(0);
    const [guesses, setguesses] = useState([]);
    const [secretWord, setsecretWord] = useState("APPLE");
    const [gameWon, setgameWon] = useState(false);
    const [gameLost, setgameLost] = useState(false);
    const [guessResults, setguessResults] = useState([]);
    const [keyboardColors, setkeyboardColors] = useState({});
    const addLetter = (letter) => {
        if (currentGuess.length < 5) {
            setcurrentGuess(currentGuess + letter)
        }
    }

    const removeLetter = () => {
        setcurrentGuess(currentGuess.slice(0, -1))
    }

    const submitGuess = () => {
        if (currentGuess.length === 5 && !gameWon && !gameLost) {


            const isCorrect = checkGuess();
            const result = evaluateGuess(currentGuess, secretWord);

            setkeyboardColors(prevColors => {
                const updatedColors = { ...prevColors };

                for (let i = 0; i < currentGuess.length; i++) {
                    const letter = currentGuess[i];
                    const newColor = result[i];
                    const oldColor = updatedColors[letter];

                    if (
                        !oldColor ||
                        newColor === "green" ||
                        (newColor === "yellow" && oldColor === "gray")
                    ) {
                        updatedColors[letter] = newColor;
                    }
                }

                return updatedColors;
            });

            setguessResults(prevResults => {
                const updated = [...prevResults, result];
                return updated;
            });

            if (isCorrect) {
                setgameWon(true);
            } else if (currentRow === 5) {
                setgameLost(true);
            }

            setguesses(prevGuesses => [...prevGuesses, currentGuess]);
            setcurrentRow(currentRow + 1);
            setcurrentGuess("");
        }
    };

    const evaluateGuess = (guess, secretWord) => {

        const result = []
        for (let i = 0; i < guess.length; i++) {
            if (guess[i] === secretWord[i]) {
                result.push("green");

            }
            else if (secretWord.includes(guess[i]))
                result.push("yellow");
            else {
                result.push("gray");
            }
        }
        return result;
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
        gameWon,
        gameLost,
        guessResults,
        keyboardColors
    }
}

export default useWordly