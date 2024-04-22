import axios from "axios";
import { getAccessToken } from "../../Utils/accontUtils";

const token = getAccessToken();

const instance = axios.create({
  baseURL: process.env.REACT_APP_HOST,
  headers: {
    authorization: `Bearer ${token}`,
  },
});

export default instance;
