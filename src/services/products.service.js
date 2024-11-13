import { GET } from "./http.service";
export const getAllProductsApi = async () => {
    const response = await GET("products");
    return response;
};
