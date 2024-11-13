// Modify the GET function to return an ApiResponse type
import axios from "axios";
import environment from "../environment";
import { handleError } from "./error.service";

export interface ApiResponse<T = unknown> {
  status: number;
  data: T;
}

const getConfig = () => {
  return {
    headers: {},
  };
};

export const GET = async (apiPath: string): Promise<ApiResponse> => {
  const response = await axios
    .get(`${environment.API_URL}/${apiPath}`, getConfig())
    .then((res) => ({
      status: res.status,
      data: res.data,
    }))
    .catch((error) => {
      handleError(error?.response);
      return { status: error?.response?.status || 500, data: null };
    });

  return response;
};
