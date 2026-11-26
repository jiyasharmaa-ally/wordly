import OverviewCards from "./OverviewCards";
import GuessDistribution from "./GuessDistribution";
import RecentGames from "./RecentGames";

const StatsMain = () => {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">

      {/* Page Heading */}
      <div className="mb-8">
        <h1 className="font-wordly text-4xl font-bold text-purple-300 sm:text-5xl">
          Your Statistics
        </h1>

        <p className="mt-2 text-sm text-gray-400 sm:text-base">
          Track your progress and see how you're improving.
        </p>
      </div>

      {/* Overview Cards */}
      <OverviewCards />

      {/* Guess Distribution */}
      <div className="mt-8">
        <GuessDistribution />
      </div>

      {/* Recent Games */}
      <div className="mt-8">
        <RecentGames />
      </div>

    </main>
  );
};

export default StatsMain;