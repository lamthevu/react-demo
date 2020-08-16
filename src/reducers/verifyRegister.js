import {
    VERIFY_REGISTER,
    VERIFY_REGISTER_FAILED,
    VERIFY_REGISTER_SUCCESS
} from '../actions/constants';

const initialState = {
    error: null,
    loading: false,
    data: null,
};

export const verifyReducers = (state = initialState, action) => {
    switch (action.type) {
        case VERIFY_REGISTER:
            return {
                error: null,
                loading: false,
                data: null,
            };
        case VERIFY_REGISTER_SUCCESS:
            return {
                error: null,
                loading: false,
                data: action.payload.data,
            };
        case VERIFY_REGISTER_FAILED:
            return {
                error: action.payload.error,
                loading: false,
                data: null,
            }
        default:
            return state;
    }
};

