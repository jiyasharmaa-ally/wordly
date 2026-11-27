
import React, { useEffect, useState } from "react";

const OverviewCards = () => {
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
            console.error("Error loading statistics:", error);
        }
    }, []);

    // Calculate Games Played
    const gamesPlayed = gameHistory.length;

    // Calculate Win Rate
    const totalWins = gameHistory.filter(
        (game) => game.result === "Won"
    ).length;

    const winRate = gamesPlayed
        ? Math.round((totalWins / gamesPlayed) * 100)
        : 0;

    // Calculate Current Streak
    let currentStreak = 0;

    for (const game of gameHistory) {
        if (game.result === "Won") {
            currentStreak++;
        } else {
            break;
        }
    }

    // Calculate Best Streak
    let bestStreak = 0;
    let streak = 0;

    // History is newest first, so reverse it for chronological calculation
    const chronologicalHistory = [...gameHistory].reverse();

    chronologicalHistory.forEach((game) => {
        if (game.result === "Won") {
            streak++;
            bestStreak = Math.max(bestStreak, streak);
        } else {
            streak = 0;
        }
    });

    // Overview cards
    const stats = [
        {
            title: "Games Played",
            value: gamesPlayed,
            icon: "🎮",
            color: "text-purple-300",
            border: "border-purple-400/20"
        },
        {
            title: "Win Rate",
            value: `${winRate}%`,
            icon: "🏆",
            color: "text-cyan-300",
            border: "border-cyan-400/20"
        },
        {
            title: "Current Streak",
            value: currentStreak,
            icon: "🔥",
            color: "text-pink-300",
            border: "border-pink-400/20"
        },
        {
            title: "Best Streak",
            value: bestStreak,
            icon: "⚡",
            color: "text-yellow-300",
            border: "border-yellow-400/20"
        }
    ];

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className={`rounded-2xl border ${stat.border} bg-[#171329] p-4 sm:p-5 shadow-lg transition duration-200 hover:-translate-y-1`}
                >
                    <div className="flex items-center justify-between">
                        <p className="text-xs sm:text-sm text-gray-400">
                            {stat.title}
                        </p>

                        <span className="text-xl">
                            {stat.icon}
                        </span>
                    </div>

                    <h2 className={`mt-4 text-3xl sm:text-4xl font-bold font-wordly ${stat.color}`}>
                        {stat.value}
                    </h2>
                </div>
            ))}
        </div>
    );
};

export default OverviewCards;
