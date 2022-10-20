import axios from 'axios';

const api = axios.create({
  baseURL: 'http://techinside.cloud:3001/api',
});

export { api };
