import React, { useEffect, useState } from 'react';
import getVenues from '../services/venue';

function Venue() {
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const data = await getVenues();
        setVenues(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load venues.");
      } finally {
        setLoading(false);
      }
    };
    fetchVenues();
  }, []);

  if (loading) return <div className="text-center py-32 text-2xl text-white">Loading venues…</div>;
  if (error) return <div className="text-center py-32 text-2xl text-red-400">{error}</div>;

  return (
    <div className="min-h-screen bg-[url('/stadium1.avif')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 space-y-12">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-red-500 text-center">
          Venues
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {venues.map((venue) => (
            <div
              key={venue.id}
              className="rounded-xl p-1 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 transition w-full sm:w-96 md:w-[400px]"
            >
              <div className="bg-white rounded-lg p-8 shadow-lg flex flex-col items-center text-center h-full">
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-64 object-cover rounded-md mb-6"
                />
                <h3 className="text-3xl font-bold text-gray-900">{venue.name}</h3>
                <p className="text-xl text-gray-700 mt-4">{venue.place}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Venue;
