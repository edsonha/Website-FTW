import { apiCall } from "./api/api";
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";

export const setSearchField = (text) => ({
  type: CHANGE_SEARCHFIELD,
  payload: text,
});

export const requestRobots = (
  apiLink = "https://jsonplaceholder.typicode.com/users"
) => async (dispatch) => {
  try {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    const data = await apiCall(apiLink);
    dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error });
  }
};
