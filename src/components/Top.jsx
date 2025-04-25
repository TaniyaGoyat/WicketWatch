import React, { useEffect, useState } from 'react';
import getTopThreePlayers from '../services/top';

function TopPlayersPage() {
  const [batsmen, setBatsmen] = useState([]);
  const [bowlers, setBowlers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopPlayers = async () => {
      try {
        const data = await getTopThreePlayers();
        setBatsmen(data.batsmen);
        setBowlers(data.bowlers);
      } catch (err) {
        setError("Unable to load top players.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchTopPlayers();
  }, []);

  if (loading) return <div className="text-center py-32 text-2xl text-white">Loading…</div>;
  if (error)   return <div className="text-center py-32 text-2xl text-red-400">{error}</div>;

  return (
    <div className="min-h-screen bg-[url('/stadium1.avif')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 space-y-20">

        {/* PAGE TITLE */}
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-400 text-center">
          Top 3 Players
        </h1>

        {/* TOP 3 Batsmen */}
        <section>
          <h2 className="text-4xl font-bold text-white text-center mb-10">
            Top 3 Batsmen
          </h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {batsmen.map(b => (
              <div
                key={b.player_id}
                className="rounded-xl p-1 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 transition"
              >
                <div className="bg-white rounded-lg p-8 shadow-lg flex flex-col items-center justify-center text-center">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">{b.player}</h3>
                  <ul className="space-y-3 text-lg font-semibold text-gray-700">
                    <li><strong className="text-xl">Matches:</strong> {b.matches}</li>
                    <li><strong className="text-xl">Runs:</strong> {b.runs}</li>
                    <li><strong className="text-xl">Avg:</strong> {b.avg}</li>
                    <li><strong className="text-xl">SR:</strong> {b.sr}</li>
                    <li><strong className="text-xl">6s:</strong> {b.sixes}</li>
                    <li><strong className="text-xl">4s:</strong> {b.fours}</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TOP 3 Bowlers */}
        <section>
          <h2 className="text-4xl font-bold text-white text-center mb-10">
            Top 3 Bowlers
          </h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {bowlers.map(b => (
              <div
                key={b.player_id}
                className="rounded-xl p-1 bg-gradient-to-r from-green-400 to-teal-500 hover:from-green-500 hover:to-teal-600 transition"
              >
                <div className="bg-white rounded-lg p-8 shadow-lg flex flex-col items-center justify-center text-center">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">{b.player}</h3>
                  <ul className="space-y-3 text-lg font-semibold text-gray-700">
                    <li><strong className="text-xl">Matches:</strong> {b.matches}</li>
                    <li><strong className="text-xl">Wickets:</strong> {b.wkts}</li>
                    <li><strong className="text-xl">Eco:</strong> {b.eco}</li>
                    <li><strong className="text-xl">Runs:</strong> {b.runs}</li>
                    <li><strong className="text-xl">Overs:</strong> {b.overs}</li>
                    <li><strong className="text-xl">Balls:</strong> {b.balls}</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

export default TopPlayersPage;
