import axios from 'axios';

const api = axios.create({
        baseURL: 'https://developers.zomato.com/api/v2.1/',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'user-key': 'f21a60d1936bbb03e7db4ae127d14ec8'
        }
    }
);

export default api;
