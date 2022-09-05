import axios from 'axios';

const token = '1adc3487f12f2357220a00d84b6dac1d';

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
        const {data: data} = await axios.get('https://pcfy.redberryinternship.ge/api/laptops?token=1adc3487f12f2357220a00d84b6dac1d');
        return data.data;
    },
    getlaptop: async (id) => {
        const {data: data} = await axios.get(`https://pcfy.redberryinternship.ge/api/laptop/${id}?token=${token}`);
        return data.data;
    },
    postlaptop: async (allInfo) => {
        const gg = {
            "user": {
                "name": "zaza",
                "surname": "გელაშვილი",
                "team_id": 1,
                "position_id": 1,
                "email": "gela.gelashvili@redberry.ge",
                "phone_number": "+995555555555"
            },
            "token" : token,
            "laptop": {
                "name": "HP",
                "image": "/storage/images/4nBeQnWa21ExiBZVInqlNx0nUp2UIxXRtNTzUxet.png",
                "brand_id": 1,
                "cpu": {
                    "name": "Intel Core i3",
                    "cores": 64,
                    "threads": 128
                },
                "ram": 34,
                "hard_drive_type": "HDD",
                "state": "new",
                "purchase_date": "10-10-2003",
                "price": 1600
            }
        }
        const formData = new FormData();
        formData.append('name', gg.user.name);
        formData.append('surname', gg.user.surname);
        formData.append('team_id', gg.user.team_id);
        formData.append('position_id', gg.user.position_id);
        formData.append('email', gg.user.email);
        formData.append('token', token);
        formData.append('phone_number', gg.user.phone_number);
        formData.append('laptop_name', gg.laptop.name);
        formData.append('laptop_image', gg.laptop.image);
        formData.append('laptop_brand_id', gg.laptop.brand_id);
        formData.append('laptop_ram', gg.laptop.ram);
        formData.append('laptop_state', gg.laptop.state);
        formData.append('laptop_purchase_date', gg.laptop.purchase_date);
        formData.append('laptop_price', gg.laptop.price);
        formData.append('laptop_cpu', gg.laptop.cpu.name);
        formData.append('laptop_cpu_cores', gg.laptop.cpu.cores);
        formData.append('laptop_cpu_threads', gg.laptop.cpu.threads);
        

       // await axios.post('https://pcfy.redberryinternship.ge/api/laptop/create', formData);
        await axios({
            method: "post",
            url: "https://pcfy.redberryinternship.ge/api/laptop/create",
            data: formData,
            headers: { "Content-Type": "multipart/form-data", "token" : token },
          })

        return;
    },
};
export default API;
