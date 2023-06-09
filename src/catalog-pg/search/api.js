import axios from 'axios';

export class MovieApi {
  #API_KEY = '57ca3cbf384960d64107a3c5d70155b8';
  #TRENDING_URL = 'https://api.themoviedb.org/3/trending/all/week';
  #SEARCH_URL = 'https://api.themoviedb.org/3/search/movie';
  #YEAR_URL = 'https://api.themoviedb.org/3/discover/movie';

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
    const { data } = await axios.get(
      `${this.#TRENDING_URL}?page=${page}&api_key=${this.#API_KEY}`
    );
    data.results = data.results.slice(0, 18);
    console.log(data);
    return data;
  }
  async getMoviesByQueryData(page) {
    const { data } = await axios.get(
      `${this.#SEARCH_URL}?query=${this.#query}&primary_release_year=${
        this.#selectYear
      }&region=${this.#selectCountry}&api_key=${this.#API_KEY}&page=${page}`
    );
    data.results = data.results.slice(0, 18);
    console.log(data);

    return data;
  }


  async getFilmYearData(page) {
    const { data } = await axios.get(
      `${
        this.#YEAR_URL
      }?include_adult=false&include_video=false&primary_release_year=${
        this.#selectYear
      }&sort_by=popularity.desc&api_key=${this.#API_KEY}&page=${page}`
    );
    data.results = data.results.slice(0, 18);
    console.log(data);
    return data;
  }
}
