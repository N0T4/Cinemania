import axios from 'axios';

const URL = "https://api.themoviedb.org/3/trending/all/day?language=en-US";
const KEY = "6172d89f6dff35bbab361edfaaecc13a";

export async function getUser() {
    try {
      const respond = await axios.get(`${URL}&api_key=${KEY}`);
     return respond.data
    } catch (error) {
      console.error(error);
    }
  }




  
 