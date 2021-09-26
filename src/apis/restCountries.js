import axios from 'axios';

const restCountries = axios.create({ baseURL: 'https://restcountries.com/v2' });

export default restCountries;
