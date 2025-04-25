import axios from 'axios';

const API_URL = "https://cricket-live-line1.p.rapidapi.com";
const HEADERS = {
  'x-rapidapi-key': '92aa3f1948msh3ec07f56d6cb91ep1c0392jsndab31f3ada4f',
  'x-rapidapi-host': 'cricket-live-line1.p.rapidapi.com'
};

const getUpcomingMatches = async () => {
  const options = {
    method: "GET",
    url: `${API_URL}/series/470/upcomingMatches`,
    headers: HEADERS
  };

  try {
    const response = await axios.request(options);
    return response.data.data.map(match => ({
      id: match.match_id,
      match: match.matchs,
      date: match.date_wise,
      time: match.match_time,
      venue: match.venue,
      teamA: match.team_a,
      teamAShort: match.team_a_short,
      teamAImg: match.team_a_img,
      teamB: match.team_b,
      teamBShort: match.team_b_short,
      teamBImg: match.team_b_img,
    }));
  } catch (error) {
    console.error("There was an error fetching upcoming matches", error);
    throw error;
  }
};

export default getUpcomingMatches;
