import axios from 'axios';
import { Query } from '../../context/searchContext';

const REACT_APP_API_KEY = '633146076f611d56dd03e36c216de625';
const baseUrl = 'https://api.themoviedb.org/3';

const fetch = async (
  type: string,
  queryType: Query,
  signal: AbortSignal,
  search?: string
) => {
  try {
    const response = await axios.get(
      `${baseUrl}/${queryType}/${type}?sort_by=vote_average.desc&api_key=${REACT_APP_API_KEY}&query=${search}`,
      {
        signal,
      }
    );
    return response.data.results.slice(0, 10);
  } catch (error) {
    console.log(error);
  }
};

export { fetch };
