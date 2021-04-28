import axios from 'axios';

//export const BASE_URL = 'http://localhost:3000/api/user';
export const BASE_URL = 'http://192.168.0.109:3000/api/user';

export const postData = (url = '', data = {}) => axios.post(url, data);
