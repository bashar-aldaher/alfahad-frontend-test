// Modify the GET function to return an ApiResponse type
import axios from "axios";
import environment from "../environment";
import { handleError } from "./error.service";
const getConfig = () => {
    return {
        headers: {},
    };
};
export const GET = async (apiPath) => {
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
