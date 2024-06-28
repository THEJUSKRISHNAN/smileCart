import ordersApi from "../../apis/order";
import { useQuery,useMutation } from "react-query";
export const useCreateOrder = () => useMutation(ordersApi.create);