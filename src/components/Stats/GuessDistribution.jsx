const GuessDistribution = () => {
  const distribution = [
    { attempts: 1, count: 2 },
    { attempts: 2, count: 4 },
    { attempts: 3, count: 6 },
    { attempts: 4, count: 5 },
    { attempts: 5, count: 1 },
    { attempts: 6, count: 0 },
  ];

  const maxCount = Math.max(...distribution.map((item) => item.count), 1);

  return (
    <div className="rounded-2xl border border-purple-400/20 bg-[#171329] p-5 sm:p-6">

      <h2 className="mb-6 font-wordly text-2xl font-bold text-purple-300">
        Guess Distribution
      </h2>

      <div className="space-y-4">
        {distribution.map((item) => (
          <div key={item.attempts} className="flex items-center gap-4">

            <span className="w-4 text-sm font-semibold text-gray-400">
              {item.attempts}
            </span>

            <div className="h-8 flex-1 overflow-hidden rounded-md bg-white/5">
              <div
                className="flex h-full min-w-8 items-center justify-end rounded-md bg-gradient-to-r from-purple-600 to-purple-400 px-3 text-sm font-bold text-white transition-all duration-500"
                style={{
                  width: `${(item.count / maxCount) * 100}%`,
                }}
              >
                {item.count}
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