import axios from "axios";

const showAllProducts = () =>
  axios.get("https://smile-cart-backend-staging.neetodeployapp.com/products");
  const AllProductsApi = { showAllProducts };
  export default AllProductsApi;
