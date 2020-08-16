import {
    REGISTER_USER,
    REGISTER_USER_FAILED,
    REGISTER_USER_SUCCESS,
} from "../actions/constants";

const initialState = {
    error: null,
    user: null,
    token: null,
    loading: false,
};

export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER:
            return {
                user: null,
                error: null,
                loading: false,
            };
        case REGISTER_USER_FAILED:
            return {
                user: null,
                error: action.payload.error,
                loading: false,
            };
        case REGISTER_USER_SUCCESS:
            return {
                user: action.payload.user,
                error: null,
                loading: false,
            };
        default:
            return state;
    }
};
