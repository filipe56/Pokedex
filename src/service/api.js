import axios from "axios";
import { URLDEFAULT } from "../util/Constants";

const api = axios.create({
  baseURL: URLDEFAULT,
});

export default api;