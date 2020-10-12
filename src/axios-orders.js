import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-b9ad4.firebaseio.com/'
});

export default instance;
