import axios from "axios";

const responseInterceptors = () => {
  axios.interceptors.response.use(response => response.data);
};
export default responseInterceptors;

// export function initializeAxios() {
//     axios.defaults.baseURL =
//       "https://smile-cart-backend-staging.neetodeployapp.com/";
//     setHttpHeaders();
//     responseInterceptors();
//   }


