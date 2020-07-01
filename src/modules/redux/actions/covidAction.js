import axios from "axios";
import { BASE_URL } from "modules/api/config";

export const getData = (query) => async (dispatch) => {
  try {
    dispatch({
      type: "AWAITING_DATA",
    });
    const response = await axios.get(BASE_URL + query);
    const data = response.data;
    dispatch({
      type: "SUCCESS_DATA",
      payload: data,
      query: query,
    });
  } catch (e) {
    dispatch({
      type: "REJECTED_DATA",
    });
  }
};
