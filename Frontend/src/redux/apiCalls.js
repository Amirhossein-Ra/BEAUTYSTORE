import { request } from "../RequestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"

export const login = async(dispatch, user) => {
    dispatch(loginStart());

    try {
        const res = await request.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginFailure());
        console.log(error);
    }
}