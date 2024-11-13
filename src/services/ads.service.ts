import { ApiResponse, GET } from "./http.service";

export const getAllAdsApi = async (): Promise<ApiResponse> => {
  const response = await GET("ads");
  return response;
};
