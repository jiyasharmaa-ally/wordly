import { RowsIcon } from 'lucide-react'
import React from 'react'

const GameGrid = ({ currentGuess, currentRow, guesses }) => {
    const rows = Array.from({ length: 6 })
    const columns = Array.from({ length: 5 })

    return (
        <div className="w-fit mx-auto flex flex-col gap-2 ">
            {rows.map((_, rowIndex) => (
                <div key={rowIndex} className="grid grid-cols-5 gap-2">
                    {columns.map((_, colIndex) => (
                        <div
                            key={colIndex}
                            className="flex items-center justify-center w-14 h-14 border text-white text-4xl font-extrabold font-wordly border-purple-400 rounded-xl bg-[#211B3B]"

                        >
                            {rowIndex < guesses.length  ? guesses[rowIndex][colIndex] :
                            rowIndex === currentRow ? currentGuess[colIndex] :
                            ""
                            }
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default GameGrid