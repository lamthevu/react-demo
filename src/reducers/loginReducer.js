import {
    LOGIN_USER,
    LOGIN_USER_FAILED,
    LOGIN_USER_SUCCESS,
} from "../actions/constants";

const initialState = {
    error: null,
    user: null,
    loading: false,
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                user: null,
                error: null,
                loading: false,
            };
        case LOGIN_USER_FAILED:
            return {
                user: null,
                error: action.payload.error,
                loading: false,
            };
        case LOGIN_USER_SUCCESS:
            return {
                user: null,
                error: null,
                data: action.payload.data
            };
        default:
            return state;
    }
};
