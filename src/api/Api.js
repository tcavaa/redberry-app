import axios from 'axios';

const API = {
    getTeam: async () => {
        const {data: data} = await axios.get('https://pcfy.redberryinternship.ge/api/teams');
        return data.data;
    },

    getPosition: async () => {
        const {data: data} = await axios.get('https://pcfy.redberryinternship.ge/api/positions');
        return data.data;
    },
    getbrands: async () => {
        const {data: data} = await axios.get('https://pcfy.redberryinternship.ge/api/brands');
        return data.data;
    },
    getCpus: async () => {
        const {data: data} = await axios.get('https://pcfy.redberryinternship.ge/api/cpus');
        return data.data;
    },
    getlaptops: async () => {
        const {data: data} = await axios.get('https://pcfy.redberryinternship.ge/api/laptops');
        return data.data;
    },
    getlaptop: async () => {
        const {data: data} = await axios.get('https://pcfy.redberryinternship.ge/api/laptop/{id}');
        return data.data;
    },
};
export default API;
