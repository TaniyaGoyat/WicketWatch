import axios from 'axios';

const API_URL = "https://cricket-live-line1.p.rapidapi.com";
const HEADERS = {
    'x-rapidapi-key': '92aa3f1948msh3ec07f56d6cb91ep1c0392jsndab31f3ada4f',
    'x-rapidapi-host': 'cricket-live-line1.p.rapidapi.com'
};

const getTopThreePlayers = async () => {
    const options = {
        method: "GET",
        url: `${API_URL}/series/470/topThreePlayers`,
        headers: HEADERS
    };
    
    try {
        const response = await axios.request(options);
        console.log("response data ", response.data);

        // Extracting bowler data
        const bowlers = response.data.data.bowler.map(bowler => ({
            player: bowler.player,
            matches: bowler.matches,
            balls: bowler.balls,
            wkts: bowler.wkts,
            overs: bowler.overs,
            eco: bowler.eco,
            runs: bowler.runs,
            player_id: bowler.player_id
        }));

        // Extracting batsman data
        const batsmen = response.data.data.batsman.map(batsman => ({
            player: batsman.player,
            matches: batsman.matches,
            avg: batsman.avg,
            runs: batsman.runs,
            sixes: batsman.sixes,
            fours: batsman.fours,
            inning: batsman.inning,
            sr: batsman.sr,
            player_id: batsman.player_id
        }));

        // Return the formatted data
        return { bowlers, batsmen };
        
    } catch (error) {
        console.error("There was an error fetching the data", error);
        throw error;
    }
}

export default getTopThreePlayers;
