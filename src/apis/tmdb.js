import axios from 'axios';

const API_KEY = 'E7jIvjM7UFVHPyxqxtOnJmpg07bhppTOPaG3kUqi';
const baseUrl = 'https://api.thenewsapi.com/v1/news/top';

const tmdb = axios.create({
  baseURL: baseUrl,
  params: {
    api_token: API_KEY,
    locale:'us',
  },
});

export default tmdb;
