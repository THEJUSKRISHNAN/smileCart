import { useQuery } from "react-query";
import { QUERY_KEYS } from "../../constants/query";
import productsApi from "../../apis/productsApi";
import AllProductsApi from "../../apis/showAllProduts";





export const useShowProducts = slug =>
    useQuery({
        queryKey:[QUERY_KEYS.PRODUCTS,slug],
        queryFn: () => productsApi.fetch(slug),
    })

export const useFetchProducts = params =>
    useQuery({
        queryKey: [QUERY_KEYS.PRODUCTS,params],
        queryFn: () =>AllProductsApi.showAllProducts(params)
    })

