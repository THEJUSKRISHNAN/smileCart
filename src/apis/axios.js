import axios from "axios";

const responseInterceptors = () => {
  axios.interceptors.response.use(response => response.data);
};
export default responseInterceptors;

const setHttpHeaders = () => {
    axios.defaults.headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
  };

export function initializeAxios() {
    axios.defaults.baseURL =
      "https://smile-cart-backend-staging.neetodeployapp.com/";
    setHttpHeaders();
    responseInterceptors();
  }


