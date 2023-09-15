import axios from "axios";

export const getProductData = () => {
    return axios.get('https://ecommerce-api-v80p.onrender.com/api/products/getallproducts');
};
export const getProductDetailsById = (id) => {
    return axios.get(`https://ecommerce-api-v80p.onrender.com/api/products/getproductbyid/${id}`);
};