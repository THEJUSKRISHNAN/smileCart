import axios from "axios";

const search =(params)=>axios.get(`products?search_term=${params}`);
const searchApi={search}
export default searchApi;