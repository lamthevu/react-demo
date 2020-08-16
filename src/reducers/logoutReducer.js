import {
    LOGOUT,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILED, LOGOUT_SUCCESS,
} from "../actions/constants";

const initialState = {
    data: null,
    error: null,
    loading: false,
};

export const logoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGOUT:
            return {
                data: null,
                error: null,
                loading: false,
            };
        case LOGIN_USER_FAILED:
            return {
                data: null,
                error: action.payload.error,
                loading: false,
            };
        case LOGOUT_SUCCESS:
            return {
                user: null,
                error: null,
                data: action.payload.data
            };
        default:
            return state;
    }
};
