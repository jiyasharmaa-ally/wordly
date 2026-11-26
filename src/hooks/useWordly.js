
import { useState, useEffect, useRef } from "react";

const useWordly = () => {
    const [currentGuess, setcurrentGuess] = useState("");
    const [currentRow, setcurrentRow] = useState(0);
    const [guesses, setguesses] = useState([]);
    const [secretWord, setsecretWord] = useState("");
    const [isWordLoading, setIsWordLoading] = useState(true);
    const [gameWon, setgameWon] = useState(false);
    const [gameLost, setgameLost] = useState(false);
    const [guessResults, setguessResults] = useState([]);
    const [keyboardColors, setkeyboardColors] = useState({});
    const [isChecking, setIsChecking] = useState(false);
    const [error, setError] = useState("");
    const [hintUsed, setHintUsed] = useState(false);
    const [hintMessage, setHintMessage] = useState("");

    // Load saved game history from localStorage
    const [gameHistory, setGameHistory] = useState(() => {
        try {
            const savedHistory = localStorage.getItem("wordlyGameHistory");
            return savedHistory ? JSON.parse(savedHistory) : [];
        } catch (err) {
            console.error("Error loading game history:", err);
            return [];
        }
    });

    // Prevent the same game from being saved twice
    const gameSavedRef = useRef(false);

    // Fetch a random five-letter word
    const getRandomWord = async () => {
        try {
            const response = await fetch(
                "https://random-word-api.herokuapp.com/word?length=5&diff=1"
            );

            if (!response.ok) {
                throw new Error("Failed to fetch word");
            }

            const data = await response.json();

            if (
                !Array.isArray(data) ||
                typeof data[0] !== "string" ||
                !/^[a-z]{5}$/i.test(data[0])
            ) {
                throw new Error("Invalid word received");
            }

            return data[0].toUpperCase();

        } catch (err) {
            console.error("Word fetching error:", err);
            return null;
        }
    };

    // Fetch the first word when the game starts
    useEffect(() => {
        const fetchWord = async () => {
            setIsWordLoading(true);

            const word = await getRandomWord();

            if (word) {
                setsecretWord(word);
                setError("");
            } else {
                setError("Unable to load a new word. Please try again.");
            }

            setIsWordLoading(false);
        };

        fetchWord();
    }, []);

    // Save game history to localStorage whenever it changes
    useEffect(() => {
        try {
            localStorage.setItem(
                "wordlyGameHistory",
                JSON.stringify(gameHistory)
            );
        } catch (err) {
            console.error("Error saving game history:", err);
        }
    }, [gameHistory]);

    // Add a letter
    const addLetter = (letter) => {
        if (
            currentGuess.length < 5 &&
            !isChecking &&
            !isWordLoading &&
            secretWord &&
            !gameWon &&
            !gameLost
        ) {
            setcurrentGuess(currentGuess + letter);
            setError("");
        }
    };

    // Remove a letter
    const removeLetter = () => {
        if (
            !isChecking &&
            !isWordLoading &&
            !gameWon &&
            !gameLost
        ) {
            setcurrentGuess(currentGuess.slice(0, -1));
            setError("");
        }
    };

    // Validate user's guess using Dictionary API
    const validateWord = async (word) => {
        try {
            const response = await fetch(
                `https://api.dictionaryapi.dev/api/v2/entries/en/${word.toLowerCase()}`
            );

            return response.ok;

        } catch (err) {
            console.error("Dictionary validation error:", err);
            setError("Unable to check the word. Please try again.");
            return null;
        }
    };

    // Calculate score
    const calculateScore = (attempts, won) => {
        if (!won) return 0;

        const scores = {
            1: 100,
            2: 80,
            3: 60,
            4: 40,
            5: 25,
            6: 10,
        };

        return scores[attempts] || 0;
    };

    // Submit guess
    const submitGuess = async () => {
        if (
            currentGuess.length !== 5 ||
            gameWon ||
            gameLost ||
            isChecking ||
            isWordLoading ||
            !secretWord
        ) {
            return;
        }

        setError("");
        setIsChecking(true);

        const isValid = await validateWord(currentGuess);

        setIsChecking(false);

        if (isValid === null) return;

        if (!isValid) {
            setError("Not a valid word!");
            return;
        }

        const isCorrect = checkGuess();
        const result = evaluateGuess(currentGuess, secretWord);

        // Update keyboard colors
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

        setguessResults(prevResults => [...prevResults, result]);

        if (isCorrect) {
            setgameWon(true);
        } else if (currentRow === 5) {
            setgameLost(true);
        }

        setguesses(prevGuesses => [...prevGuesses, currentGuess]);
        setcurrentRow(currentRow + 1);
        setcurrentGuess("");
    };

    // Save completed game to history
    useEffect(() => {
        if ((!gameWon && !gameLost) || gameSavedRef.current) {
            return;
        }

        gameSavedRef.current = true;

        const attempts = currentRow;
        const result = gameWon ? "Won" : "Lost";

        const newGame = {
            id: Date.now(),
            word: secretWord,
            result,
            attempts,
            score: calculateScore(attempts, gameWon),
            date: new Date().toISOString(),
        };

        setGameHistory(prevHistory => [newGame, ...prevHistory]);

    }, [gameWon, gameLost]);

    // Reset game and fetch a new word
    const resetGame = async () => {
        gameSavedRef.current = false;

        setIsWordLoading(true);
        setsecretWord("");
        setError("");

        setguesses([]);
        setcurrentGuess("");
        setcurrentRow(0);
        setkeyboardColors({});
        setguessResults([]);
        setgameWon(false);
        setgameLost(false);
        setHintUsed(false);
        setHintMessage("");

        const newWord = await getRandomWord();

        if (newWord) {
            setsecretWord(newWord);
        } else {
            setError("Unable to load a new word. Please try again.");
        }

        setIsWordLoading(false);
    };

    // Evaluate guess
    const evaluateGuess = (guess, secretWord) => {
        const result = [];
        const remainingLetters = secretWord.split("");

        // First pass: Green letters
        for (let i = 0; i < guess.length; i++) {
            if (guess[i] === secretWord[i]) {
                result[i] = "green";
                remainingLetters.splice(i, 1);
            }
        }

        // Second pass: Yellow and gray letters
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

    // Check whether guess matches secret word
    const checkGuess = () => {
        return currentGuess === secretWord;
    };

    // Get hint
    const getHint = () => {
        if (hintUsed || !secretWord || isWordLoading || gameWon || gameLost) {
            return;
        }

        const correctLetters = new Set();

        guesses.forEach((guess) => {
            for (let i = 0; i < 5; i++) {
                if (guess[i] === secretWord[i]) {
                    correctLetters.add(i);
                }
            }
        });

        const availablePositions = [];

        for (let i = 0; i < 5; i++) {
            if (!correctLetters.has(i)) {
                availablePositions.push(i);
            }
        }

        if (availablePositions.length === 0) {
            setHintMessage("You've already discovered every letter!");
            return;
        }

        const randomIndex = Math.floor(
            Math.random() * availablePositions.length
        );

        const position = availablePositions[randomIndex];

        setHintMessage(
            `The ${["first", "second", "third", "fourth", "fifth"][position]} letter is ${secretWord[position]}!`
        );

        setTimeout(() => {
            setHintMessage("");
        }, 2500);

        setHintUsed(true);
    };

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
        resetGame,
        error,
        isChecking,
        isWordLoading,
        getHint,
        hintUsed,
        hintMessage,
        gameHistory,
    };
};

export default useWordly;
