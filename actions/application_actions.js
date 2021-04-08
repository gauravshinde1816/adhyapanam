import axios from "axios";
import { GET_APPLICATIONS, DELETE_APPLICATIONS } from "./types";

export const getApplications = () => async (dispatch) => {
  try {
    const res = await axios.get("http://192.168.42.167:5000/apply");
    // console.log(res);
    dispatch({
      type: GET_APPLICATIONS,
      payload: res.data.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteApplication = (id) => async (dispatch) => {
  try {
    console.log(id);
    const res = await axios.delete(`http://192.168.42.167:5000/apply/${id}`);
    console.log(res.data);
    dispatch({
      type: DELETE_APPLICATIONS,
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};
