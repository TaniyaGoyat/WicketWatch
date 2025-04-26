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
        setError('Unable to load squad.');
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
    <div className="min-h-screen px-4 py-10">
      <h1 className="text-6xl text-[#D4A73B] font-bold text-center mb-8 relative">
        Team Squads
        <span className="block h-1 w-20  mx-auto mt-2 rounded"></span>
      </h1>
      {teams.map((teamObj, index) => (
        <div key={index} className="mb-10 p-6 rounded-xl  shadow-inner">
          <div className="flex items-center space-x-4 mb-4">
            <img
              src={teamObj.teamFlag}
              alt={teamObj.teamShort}
              className="w-20 h-20 rounded-full"
            />
            <h2 className="text-3xl text-[#D4A73B] font-semibold">{teamObj.teamName}</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {teamObj.players.map((player) => (
              <div
                key={player.id}
                className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
              >
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-20 h-20 object-cover mx-auto rounded-full border-2 border-[#D4A73B] mb-3"
                />
                <h3 className="text-base font-semibold text-gray-800">{player.name}</h3>
                <p className="text-sm text-gray-500">{player.role}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Squad;
