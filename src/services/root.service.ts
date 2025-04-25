import axios from "../config/axios.config";
import apiUrl from "../config/url";

export const getMe = async () => {
    const result = await axios.get(apiUrl.user.me);
    return result.data;
};
