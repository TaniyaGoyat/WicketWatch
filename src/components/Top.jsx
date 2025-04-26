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
  if (error) return <div className="text-center py-32 text-2xl text-red-400">{error}</div>;

  return (
    <div className="min-h-screen  text-white px-6 py-16">
      <div className="max-w-6xl mx-auto space-y-20">

        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-center drop-shadow-lg animate-pulse">
          Top 3 Players
        </h1>

        {/* Top 3 Batsmen */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-10 underline decoration-purple-500">Top 3 Batsmen</h2>
          <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {batsmen.map(b => (
              <div
                key={b.player_id}
                className="bg-white/10 backdrop-blur-xl text-center rounded-2xl p-6 border border-purple-500/40 bg-gradient-to-br from-black via-[#1E1E2F] to-[#121212] shadow-md hover:shadow-purple-600 transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-2xl font-bold text-purple-300 mb-4">{b.player}</h3>
                <ul className="space-y-2 text-md text-purple-100">
                  <li>🏏 Matches: <span className="font-semibold">{b.matches}</span></li>
                  <li>💥 Runs: <span className="font-semibold">{b.runs}</span></li>
                  <li>📊 Avg: <span className="font-semibold">{b.avg}</span></li>
                  <li>⚡ SR: <span className="font-semibold">{b.sr}</span></li>
                  <li>🧨 6s: <span className="font-semibold">{b.sixes}</span></li>
                  <li>🪙 4s: <span className="font-semibold">{b.fours}</span></li>
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Top 3 Bowlers */}
        <section>
          <h2 className="text-4xl  font-bold text-center mb-10 underline decoration-teal-400">Top 3 Bowlers</h2>
          <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {bowlers.map(b => (
              <div
                key={b.player_id}
                className="bg-white/10 backdrop-blur-xl text-center rounded-2xl p-6 border border-teal-400/40 bg-gradient-to-br from-black via-[#1E1E2F] to-[#121212] shadow-md hover:shadow-teal-600 transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-2xl font-bold text-teal-300 mb-4">{b.player}</h3>
                <ul className="space-y-2 text-md text-teal-100">
                  <li>🎯 Matches: <span className="font-semibold">{b.matches}</span></li>
                  <li>🔥 Wickets: <span className="font-semibold">{b.wkts}</span></li>
                  <li>💨 Economy: <span className="font-semibold">{b.eco}</span></li>
                  <li>🧮 Runs: <span className="font-semibold">{b.runs}</span></li>
                  <li>⏱️ Overs: <span className="font-semibold">{b.overs}</span></li>
                  <li>🟢 Balls: <span className="font-semibold">{b.balls}</span></li>
                </ul>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

export default TopPlayersPage;
