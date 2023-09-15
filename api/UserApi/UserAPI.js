import axios from "axios";

export const registerUser = (payload) => {
    return axios.post(`https://ecommerce-api-v80p.onrender.com/api/auth/register`,payload);
};
export const loginUser = (payload) => {
    return axios.post(`https://ecommerce-api-v80p.onrender.com/api/auth/login`,payload);
};