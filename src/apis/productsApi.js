import axios from "axios";

const fetch =(slug)=>axios.get(`products/${slug}`);
const productsApi={fetch}
export default productsApi;
