import axios from "axios";

const fetch =(slug)=>axios.get(`https://smile-cart-backend-staging.neetodeployapp.com/products/${slug}`);
const productsApi={fetch}
export default productsApi;
