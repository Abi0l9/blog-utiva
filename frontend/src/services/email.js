import { emailUrl } from "../const";
import axios from "axios";

export const subscribe = async (obj) => {
  const request = await axios.post(emailUrl, obj);
  return request.data;
};