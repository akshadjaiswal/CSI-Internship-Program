import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./userSlice";
export const login = async (dispatch,user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:5000/api/auth/login",user);
    console.log("login res - ", res);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
