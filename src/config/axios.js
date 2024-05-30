import axios from "axios";
import { BASE_API } from "./apiUrls";

const instance = axios.create({
  baseURL: BASE_API.URL,
});

export default instance;
