
import React, { useEffect, useState } from "react";

const RecentGames = () => {
    const [games, setGames] = useState([]);

    // Load saved game history
    useEffect(() => {
        try {
            const savedHistory = localStorage.getItem("wordlyGameHistory");

            if (savedHistory) {
                const parsedHistory = JSON.parse(savedHistory);

                if (Array.isArray(parsedHistory)) {
                    setGames(parsedHistory);
                }
            }
        } catch (error) {
            console.error("Error loading recent games:", error);
        }
    }, []);

    return (
        <div className="rounded-2xl border border-purple-400/20 bg-[#171329] p-5 sm:p-6">

            <h2 className="mb-5 font-wordly text-2xl font-bold text-purple-300">
                Recent Games
            </h2>

            {games.length === 0 ? (
                <p className="py-8 text-center text-sm text-gray-400">
                    No games played yet. Start playing to see your history!
                </p>
            ) : (
                <div className="overflow-x-auto">
                    <div className="min-w-[480px]">

                        {/* Table Headings */}
                        <div className="grid grid-cols-4 border-b border-white/10 pb-3 text-sm font-semibold text-gray-400">
                            <span>Word</span>
                            <span className="text-center">Result</span>
                            <span className="text-center">Attempts</span>
                            <span className="text-right">Score</span>
                        </div>

                        {/* Game Rows */}
                        {games.slice(0, 10).map((game) => (
                            <div
                                key={game.id}
                                className="grid grid-cols-4 items-center border-b border-white/10 py-4 last:border-0"
                            >
                                <span className="font-wordly text-lg font-bold tracking-widest text-white">
                                    {game.word}
                                </span>

                                <span
                                    className={`justify-self-center rounded-full px-3 py-1 text-xs font-semibold ${
                                        game.result === "Won"
                                            ? "bg-purple-500/15 text-purple-300"
                                            : "bg-red-500/15 text-red-300"
                                    }`}
                                >
                                    {game.result}
                                </span>

                                <span className="text-center text-sm text-gray-300">
                                    {game.attempts}/6
                                </span>

                                <span className="text-right font-semibold text-cyan-300">
                                    {game.score}
                                </span>
                            </div>
                        ))}

                    </div>
                </div>
            )}

        </div>
    );
};

export default RecentGames;
