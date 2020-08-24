import 'dotenv/config';
import axios from 'axios';

const baseURL = process.env.OCTOPUS_BASE_URL;
const apiKey = process.env.OCTOPUS_API_KEY;

const config = {
  baseURL,
  headers: {
    'X-Octopus-ApiKey': apiKey
  }
};

const instance = axios.create(config);

export default instance;
