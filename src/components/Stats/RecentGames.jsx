const RecentGames = () => {
  const games = [
    { word: "CRANE", result: "Won", attempts: 3, score: 60 },
    { word: "PLANT", result: "Lost", attempts: 6, score: 0 },
    { word: "SHINE", result: "Won", attempts: 2, score: 80 },
    { word: "BREAD", result: "Won", attempts: 4, score: 40 },
  ];

  return (
    <div className="rounded-2xl border border-purple-400/20 bg-[#171329] p-5 sm:p-6">

      <h2 className="mb-5 font-wordly text-2xl font-bold text-purple-300">
        Recent Games
      </h2>

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
          {games.map((game, index) => (
            <div
              key={index}
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

    </div>
  );
};

export default RecentGames;