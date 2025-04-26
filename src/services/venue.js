import axios from 'axios';

const API_URL = "https://cricket-live-line1.p.rapidapi.com";
const HEADERS = {
  'x-rapidapi-key': '9923121e61mshe38aa438957bcf4p12d43bjsn458e93aa016b',
  'x-rapidapi-host': 'cricket-live-line1.p.rapidapi.com'
};

/**
 * Fetches all venues for the given series (470) and returns
 * an array of simplified venue objects.
 */
const getVenues = async () => {
  const options = {
    method: "GET",
    url: `${API_URL}/series/470/venues`,
    headers: HEADERS
  };

  try {
    const response = await axios.request(options);
    // response.data.data is an array of venue objects
    return response.data.data.map(venue => ({
      id:    venue.id,
      place: venue.place,
      name:  venue.name,
      image: venue.image
    }));
  } catch (error) {
    console.error("Error fetching venues:", error);
    throw error;
  }
};

export default getVenues;
