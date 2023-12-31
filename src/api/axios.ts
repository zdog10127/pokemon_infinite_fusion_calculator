import Axios from "axios";
import { HTTP_METHODS } from "../global";

const axios = Axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon/"
});

export const createApiRequest = async (
    url: string,
    method: HTTP_METHODS,
    data: any
  ) => {
    try {
      const response = await axios({
        url,
        method,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        data,
      });
      return response.data;
    } catch (err) {
      console.error(err);
      //const statusCode = err.response.status;
      //const messages = err.response.data.data[0].messages;
      //throw new Error(JSON.stringify({ statusCode, messages }));
    }
};
export const baseImageUrl =
   "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/";
  
export default axios;