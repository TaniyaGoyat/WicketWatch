import axios from 'axios';

const API_URL = "https://cricket-live-line1.p.rapidapi.com";
const HEADERS = {
  'x-rapidapi-key': '92aa3f1948msh3ec07f56d6cb91ep1c0392jsndab31f3ada4f',
  'x-rapidapi-host': 'cricket-live-line1.p.rapidapi.com'
};

const getSquad = async () => {
  const options = {
    method: "GET",
    url: `${API_URL}/series/470/squads`, // Adjust the endpoint if different
    headers: HEADERS
  };

  try {
    const response = await axios.request(options);
    return response.data.data.map(team => ({
      teamName: team.team.name,
      teamShort: team.team.short_name,
      teamFlag: team.team.flag,
      players: team.player.map(player => ({
        id: player.player_id,
        name: player.name,
        role: player.play_role,
        image: player.image
      }))
    }));
  } catch (error) {
    console.error("There was an error fetching the squad data", error);
    throw error;
  }
};

export default getSquad;
