import React, { useEffect, useState } from 'react';
import getSquad from '../services/squad';
import LoadingSpinner from '../ui/Loader';

function Squad() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSquad = async () => {
      try {
        const data = await getSquad();
        setTeams(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load squad.");
      } finally {
        setLoading(false);
      }
    };

    fetchSquad();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 mt-8">{error}</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Team Squads</h1>
      {teams.map((teamObj, index) => (
        <div key={index} className="mb-10">
          <div className="flex items-center space-x-4 mb-4">
            <img
              src={teamObj.teamFlag}
              alt={teamObj.teamShort}
              className="w-20 h-20 rounded-full"
            />
            <h2 className="text-3xl font-semibold">{teamObj.teamName}</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {teamObj.players.map((player) => (
              <div
                key={player.id}
                className="bg-white p-4 rounded-xl shadow hover:shadow-md transition text-center"
              >
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-20 h-20 object-cover mx-auto rounded-full mb-2"
                />
                <h3 className="text-sm font-medium text-centered">{player.name}</h3>
                <p className="text-xs text-gray-500 text-centered">{player.role}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Squad;
