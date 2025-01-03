import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  params: {
    language: 'pt-BR',
    api_key: import.meta.env.VITE_TMDB_API_KEY,
  },
});
