import axios from 'axios';

const REACT_APP_API_KEY = '633146076f611d56dd03e36c216de625';
const baseUrl = 'https://api.themoviedb.org/3';

const getImageConfig = async (signal: AbortSignal) => {
  const response = await axios.get(
    `${baseUrl}/configuration?api_key=${REACT_APP_API_KEY}`,
    { signal }
  );
  return response.data;
};

export { getImageConfig };
