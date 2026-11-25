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


    const resetGame = () => {
        setguesses([]);
        setcurrentGuess("");
        setcurrentRow(0);
        setkeyboardColors({});
        setguessResults([]);
        setgameWon(false);
        setgameLost(false);
    }


    const evaluateGuess = (guess, secretWord) => {
        const result = [];
        const remainingLetters = secretWord.split("");

        for (let i = 0; i < guess.length; i++) {
            if (guess[i] === secretWord[i]) {
                result[i] = "green";
                remainingLetters.splice(i, 1);
            }
        }
        for (let i = 0; i < guess.length; i++) {
            if (result[i] === "green") continue;

            if (remainingLetters.includes(guess[i])) {
                result[i] = "yellow";
                const extra = remainingLetters.indexOf(guess[i]);
                remainingLetters.splice(extra, 1);
            } else {
                result[i] = "gray";
            }
        }

        return result;
    };

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
        keyboardColors,
        resetGame
    }
}

export default useWordly