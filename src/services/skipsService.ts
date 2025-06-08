
import { apiBaseUrl } from "../constants";
import axios from "axios";
import type { SkipType } from "../types";

const getAll = async () => {
    const response = await axios.get<SkipType[]>(`${apiBaseUrl}`);
    return response.data
};

export default { getAll };