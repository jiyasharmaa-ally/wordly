
const GameGrid = ({ currentGuess, currentRow, guesses = [], guessResults = [] }) => {
    const rows = Array.from({ length: 6 });
    const columns = Array.from({ length: 5 });

    const colorClasses = {
        green: "bg-green-600 border-green-500",
        yellow: "bg-yellow-500 border-yellow-400",
        gray: "bg-gray-600 border-gray-500"
    };
  

    return (
        <div className="w-fit mx-auto flex flex-col gap-2">
            {rows.map((_, rowIndex) => (
                <div key={rowIndex} className="grid grid-cols-5 gap-2">
                    {columns.map((_, colIndex) => {
                        const color = rowIndex < guesses.length
                            ? guessResults[rowIndex]?.[colIndex] || ""
                            : "";

                        const letter = rowIndex < guesses.length
                            ? guesses[rowIndex][colIndex]
                            : rowIndex === currentRow
                                ? currentGuess?.[colIndex] || ""
                                : "";

                        return (
                            <div
                                key={colIndex}
                                className={`flex items-center justify-center w-14 h-14 border text-white text-4xl font-extrabold font-wordly rounded-xl ${colorClasses[color] || "bg-[#211B3B] border-purple-400"}`}
                            >
                                {letter}
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

export default GameGrid;
