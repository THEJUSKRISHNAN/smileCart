import axios from "axios";

const showAllProducts = (params) =>
axios.get(`products?search_term=${params}&page=1&page_size=50`);

  const AllProductsApi = { showAllProducts };
  export default AllProductsApi;
