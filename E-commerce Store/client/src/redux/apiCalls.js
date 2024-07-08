import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerFailure,
  registerStart,
  registerSuccess,
} from "./userSlice";
import { userRequest } from "./requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await userRequest.post("/auth/login", user);
    console.log("login res - ", res);
    if (res.status === 200) {
      dispatch(loginSuccess(res.data));
    } else {
      dispatch(loginFailure());
    }
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await userRequest.post("/auth/register", user);
    console.log("register res - ", res);
    if (res.status === 201) {
      dispatch(registerSuccess(res.data));
    } else {
      dispatch(registerFailure());
    }
  } catch (error) {
    dispatch(registerFailure());
  }
};
