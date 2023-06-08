import axios from 'axios';

export class Unsplashapi {
  #API_KEY = '57ca3cbf384960d64107a3c5d70155b8';
  #TRENDING_URL = 'https://api.themoviedb.org/3/trending/all/week';
  #SEARCH_URL = 'https://api.themoviedb.org/3/search/movie';


  #query = '';
  #selectYear = '';
  #selectCountry = '';

  set searchQuery(newQuery) {
    this.#query = newQuery;
  }
  set selectYear(newSelectYear) {
    this.#selectYear = newSelectYear;
  }
  set selectCountry(newSelectCountry) {
    this.#selectCountry = newSelectCountry;
  }

  async getTrendingMovieData(page) {
    const response = await axios.get(
      `${this.#TRENDING_URL}?page=${page}&api_key=${this.#API_KEY}`
    );
    console.log(response);
    return response.data;
  }

  async getMoviesByQueryData(page) {
    const response = await axios.get(
      `${this.#SEARCH_URL}?query=${this.#query}&primary_release_year=${
        this.#selectYear
      }&region${this.#selectCountry}&api_key=${this.#API_KEY}&page=${page}`
    );
    console.log(response);
    return response.data;
  }

  async getFilmYearData(URL, page) {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2NhM2NiZjM4NDk2MGQ2NDEwN2EzYzVkNzAxNTViOCIsInN1YiI6IjY0N2E3OTYyY2FlZjJkMDBkZjg4MGNhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9FyD_Xuprwhf78eJyu1Ew5c52DJhC0pkIeyoylTof04',
      },
    };
    const response = await axios.get(URL, options);
    console.log(response);
    return response.data;
  }
}
