import { login, register, verifyCode, logout } from "../services/authService";
import {
    LOGIN_USER,
    LOGIN_USER_FAILED,
    LOGIN_USER_SUCCESS,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILED,
    REGISTER_USER,
    VERIFY_REGISTER_FAILED,
    VERIFY_REGISTER_SUCCESS,
    VERIFY_REGISTER,
    LOGOUT,
    LOGOUT_SUCCESS,
    LOGOUT_FAILED,
} from "./constants";

const Login = (user) => {
    return dispatch => {
        dispatch(loginFetch());
        login({ user }).then(data => dispatch(loginSuccess(data)))
            .catch(error => dispatch(loginFailed(error)));
    }
};

const Logout = () => {
    return dispatch => {
        dispatch(logoutFailed());
        logout().then(data => dispatch(logoutSuccess(data)))
            .catch(error => dispatch(logoutFailed(error)));
    }
};

const Verify = (code) => {
    return dispatch => {
        dispatch(verifyFecth());
        verifyCode({ code }).then(data => dispatch(verifySuccess(data)))
            .catch(error => dispatch(verifyFailed(error)));
    }
};

const Register = (user) => {
    return dispatch => {
        dispatch(registerFetch());
        register({ user }).then(user => {
            dispatch(registerSuccess(user));
        }).catch(error => dispatch(registerFailed(error)));
    }
};

const loginSuccess = (data) => ({
        type: LOGIN_USER_SUCCESS,
        payload: {
            data
        }
    }
);

const loginFetch = () => ({
    type: LOGIN_USER,
});

const loginFailed = (error) => ({
    type: LOGIN_USER_FAILED,
    payload: { error },
});

const logoutSuccess = (data) => ({
        type: LOGOUT_SUCCESS,
        payload: {
            data
        }
    }
);

const logoutFetch = () => ({
    type: LOGOUT,
});

const logoutFailed = (error) => ({
    type: LOGOUT_FAILED,
    payload: { error },
});

const verifyFecth= () => ({
    type: VERIFY_REGISTER,
});

const verifySuccess = (data) => ({
    type: VERIFY_REGISTER_SUCCESS,
    payload: {
        data,
    }
});

const verifyFailed= (error) => ({
    type: VERIFY_REGISTER_FAILED,
    payload: {
        error
    },
});

const registerSuccess = (user) => ({
    type: REGISTER_USER_SUCCESS,
    payload: {
        user
    },
});

const registerFetch = () => ({
    type: REGISTER_USER,
});

const registerFailed = (error) => ({
    type: REGISTER_USER_FAILED,
    payload: { error },
});

export {
    Login,
    Register,
    Verify,
    Logout,
}