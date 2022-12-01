import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const baseUrl = 'https://api.themoviedb.org/3';

const getTopRated = async (type: string, signal: AbortSignal) => {
  try {
    const response = await axios.get(`${baseUrl}/${type}/top_rated`, {
      signal,
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results.slice(0, 10);
  } catch (error) {
    console.log(error);
  }
};

const getSearched = async (
  type: string,
  signal: AbortSignal,
  search: string
) => {
  try {
    const response = await axios.get(`${baseUrl}/search/${type}`, {
      signal,
      params: {
        api_key: API_KEY,
        query: search,
      },
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

const getSingle = async (type: string, id: string, signal: AbortSignal) => {
  try {
    const response = await axios.get(`${baseUrl}/${type}/${id}`, {
      signal,
      params: {
        api_key: API_KEY,
        append_to_response: 'videos',
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { getTopRated, getSearched, getSingle };
