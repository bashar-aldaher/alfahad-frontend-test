import { ApiResponse, GET } from "./http.service";

export const getAllProductsApi = async (): Promise<ApiResponse> => {
  const response = await GET("products");
  return response;
};
