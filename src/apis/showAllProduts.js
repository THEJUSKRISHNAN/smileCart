import axios from "axios";

const showAllProducts = () =>
axios.get("products?page=1&page_size=50");

  const AllProductsApi = { showAllProducts };
  export default AllProductsApi;
