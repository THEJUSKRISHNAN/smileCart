import axios from "axios";

const showAllProducts = (params) =>
axios.get(`products?search_term=${params}`);

  const AllProductsApi = { showAllProducts };
  export default AllProductsApi;
