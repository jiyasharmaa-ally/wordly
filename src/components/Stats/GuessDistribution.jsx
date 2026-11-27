
import React, { useEffect, useState } from "react";

const GuessDistribution = () => {
    const [gameHistory, setGameHistory] = useState([]);

    // Load saved game history
    useEffect(() => {
        try {
            const savedHistory = localStorage.getItem("wordlyGameHistory");

            if (savedHistory) {
                const parsedHistory = JSON.parse(savedHistory);

                if (Array.isArray(parsedHistory)) {
                    setGameHistory(parsedHistory);
                }
            }
        } catch (error) {
            console.error("Error loading guess distribution:", error);
        }
    }, []);

    // Calculate wins for each attempt
    const distribution = [1, 2, 3, 4, 5, 6].map((attempt) => ({
        attempts: attempt,
        count: gameHistory.filter(
            (game) =>
                game.result === "Won" &&
                game.attempts === attempt
        ).length
    }));

    const maxCount = Math.max(
        ...distribution.map((item) => item.count),
        1
    );

    return (
        <div className="rounded-2xl border border-purple-400/20 bg-[#171329] p-5 sm:p-6">

            <h2 className="mb-6 font-wordly text-2xl font-bold text-purple-300">
                Guess Distribution
            </h2>

            <div className="space-y-4">
                {distribution.map((item) => (
                    <div
                        key={item.attempts}
                        className="flex items-center gap-4"
                    >
                        <span className="w-4 text-sm font-semibold text-gray-400">
                            {item.attempts}
                        </span>

                        <div className="h-8 flex-1 overflow-hidden rounded-md bg-white/5">
                            <div
                                className="flex h-full min-w-0 items-center justify-end rounded-md bg-gradient-to-r from-purple-600 to-purple-400 px-3 text-sm font-bold text-white transition-all duration-500"
                                style={{
                                    width: item.count > 0
                                        ? `${(item.count / maxCount) * 100}%`
                                        : "0%"
                                }}
                            >
                                {item.count > 0 && item.count}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <p className="mt-5 text-xs text-gray-500">
                Number of games won on each attempt.
            </p>

        </div>
    );
};

export default GuessDistribution;
