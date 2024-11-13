import { GET } from "./http.service";
export const getAllAdsApi = async () => {
    const response = await GET("ads");
    return response;
};
