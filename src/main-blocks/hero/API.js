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
export async function getTrailer(id) {
    try {
      return await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${KEY}&language=en-US`);
    } catch (error) {
      console.error(error);
    }
}



  
 