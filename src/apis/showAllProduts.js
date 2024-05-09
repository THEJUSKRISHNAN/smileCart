import axios from "axios";

const showAllProducts = () =>
axios.get("products");

  const AllProductsApi = { showAllProducts };
  export default AllProductsApi;
