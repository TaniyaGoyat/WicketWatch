import axios from 'axios'
const API_URL="https://cricket-live-line1.p.rapidapi.com";
const HEADERS={
     
     'x-rapidapi-key': '92aa3f1948msh3ec07f56d6cb91ep1c0392jsndab31f3ada4f',
     'x-rapidapi-host': 'cricket-live-line1.p.rapidapi.com' 
}

const getPointsTable =async()=>{
const options={
    method:"GET",
    url:`${API_URL}/series/470/pointsTable`,
    headers:HEADERS
}
try{
   const response=await axios.request(options);
   console.log("response data ",response.data);
   return response.data.data.A.map((team)=>({
    team:team.teams,
    played:team.P,
    won:team.W,
    lost:team.L,
    points:team.Pts,
    nrr:team.NRR,
    flag:team.flag
   }))
}catch(error){
     console.error("There is an error fatching the data");
     throw error;
}
}

export default getPointsTable;