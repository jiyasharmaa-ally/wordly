
import React from "react";

const OverviewCards = () => {
    const stats = [
        {
            title: "Games Played",
            value: "24",
            icon: "🎮",
            color: "text-purple-300",
            border: "border-purple-400/20"
        },
        {
            title: "Win Rate",
            value: "75%",
            icon: "🏆",
            color: "text-cyan-300",
            border: "border-cyan-400/20"
        },
        {
            title: "Current Streak",
            value: "4",
            icon: "🔥",
            color: "text-pink-300",
            border: "border-pink-400/20"
        },
        {
            title: "Best Streak",
            value: "9",
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
                        <span className="text-xl">{stat.icon}</span>
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
