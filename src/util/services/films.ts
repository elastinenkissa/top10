import axios from 'axios';

const REACT_APP_API_KEY = '633146076f611d56dd03e36c216de625';
const baseUrl = 'https://api.themoviedb.org/3';

const getTopRated = async (type: string, signal: AbortSignal) => {
  try {
    const response = await axios.get(
      `${baseUrl}/${type}/top_rated?api_key=${REACT_APP_API_KEY}`,
      {
        signal,
      }
    );
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
    const response = await axios.get(
      `${baseUrl}/search/${type}?api_key=${REACT_APP_API_KEY}&query=${search}`,
      { signal }
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

const getSingle = async (type: string, id: string, signal: AbortSignal) => {
  try {
    const response = await axios.get(
      `${baseUrl}/${type}/${id}?api_key=${REACT_APP_API_KEY}`,
      { signal }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { getTopRated, getSearched, getSingle };
