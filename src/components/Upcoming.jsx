import React, { useState, useEffect } from 'react';
import getUpcomingMatches from '../services/upcoming';
import LoadingSpinner from '../ui/Loader';

function UpcomingMatches() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const data = await getUpcomingMatches();
        setMatches(data);
      } catch (err) {
        setError("Unable to load upcoming matches");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen"><LoadingSpinner size="lg" /></div>;
  }

  if (error) {
    return <div className="text-center text-red-500 p-4">{error}</div>;
  }

  return (
    <div className="px-4 py-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Upcoming Matches</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {matches.map((match) => (
          <div key={match.id} className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-xl transition">
            <div className="text-sm text-gray-500 mb-2 text-right">{match.date} • {match.time}</div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <img src={match.teamAImg} alt={match.teamAShort} className="w-12 h-12 rounded-full" />
                <span className="font-semibold">{match.teamA}</span>
              </div>
              <span className="text-gray-500 font-semibold">vs</span>
              <div className="flex items-center space-x-2">
                <img src={match.teamBImg} alt={match.teamBShort} className="w-12 h-12 rounded-full" />
                <span className="font-semibold">{match.teamB}</span>
              </div>
            </div>
            <div className="text-sm text-center text-gray-600">{match.venue}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingMatches;
