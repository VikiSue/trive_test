import axios from 'axios';

export const BASE_URL = 'http://104.248.247.176:3000/api/user';

export const postData = (url = '', data = {}) => axios.post(url, data);
