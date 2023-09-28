import axios from "axios";
import { API_URL } from "../utils/consts";

export const getPictures = async () => {
  return await axios.get(API_URL);
};
