import React, { useState, useEffect } from 'react';
import getPointsTable from "../services/api";
import LoadingSpinner from "../ui/Loader";
import "./TeamStanding.css";

function TeamStanding() {
  const [pointsTable, setPointsTable] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPointsTable = async () => {
      try {
        const data = await getPointsTable();
        setPointsTable(data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("We are unable to load the data");
      } finally {
        setLoading(false);
      }
    };

    fetchPointsTable();
  }, []);

  if (loading) {
    return (
      <div className="flex bg-[url('/stadium1.avif')] items-center justify-center min-h-screen">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 p-4">
        {error}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Points Table</h1>

      <div className="table-container overflow-x-auto">
        <table className="points-table">
          <thead>
            <tr>
              <th>Team</th>
              <th>P</th>
              <th>W</th>
              <th>L</th>
              <th>Points</th>
              <th>NRR</th>
            </tr>
          </thead>
          <tbody>
            {pointsTable.map((item, index) => (
              <tr key={index}>
                <td>
                  <div className="flex items-center justify-center gap-3">
                    <img src={item.flag} alt="team-flag" />
                    <span className="font-semibold text-lg">{item.team_name}</span>
                  </div>
                </td>
                <td>{item.played}</td>
                <td>{item.won}</td>
                <td>{item.lost}</td>
                <td className="font-bold">{item.points}</td>
                <td>{item.nrr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TeamStanding;
