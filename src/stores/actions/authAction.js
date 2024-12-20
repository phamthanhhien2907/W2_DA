import { apiLoginSuccess } from "../../services/authService";
import actionType from "./actionType";
export const loginSuccessAction = (data) => async (dispatch) => {
  try {
    let response = await apiLoginSuccess(data);
    console.log(response);
    if (response) {
      dispatch({
        type: actionType.LOGIN_SUCCESS,
        token: response,
      });
    } else {
      dispatch({
        type: actionType.LOGIN_SUCCESS,
        token: null,
      });
    }
  } catch (error) {
    dispatch({
      type: actionType.LOGIN_SUCCESS,
      token: null,
      msg: error,
    });
  }
};
export const logout = () => ({
  type: actionType.LOGOUT,
});
