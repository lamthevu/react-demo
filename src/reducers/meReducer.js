import {
    GET_ME,
    GET_ME_FAILED,
    GET_ME_SUCCESS,
} from "../actions/constants";

const initialState = {
    error: null,
    data: null,
    loading: false,
};

export const getMeReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case GET_ME:
            return {
                error: null,
                loading: false,
                data: null,
            };
        case GET_ME_FAILED:
            return {
                error: action.payload.error,
                data: null,
                loading: false,
            };
        case GET_ME_SUCCESS:
            return {
                error: null,
                ...action.payload,
            };
        default:
            return state;
    }
};