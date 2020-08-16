import { getProfile } from "../services/userService";

import {
    GET_ME_SUCCESS,
    GET_ME_FAILED,
    GET_ME,
} from "./constants";

const GetMe = () => {
    return dispatch => {
        dispatch(profileFetch());
        getProfile().then(data => dispatch(profileSuccess(data)))
            .catch(error => dispatch(profileFailed(error)));
    }
};

const profileSuccess = (data) => ({
    type: GET_ME_SUCCESS,
    payload: {
        ...data
    },
});

const profileFetch = () => ({
    type: GET_ME,
});

const profileFailed = (error) => ({
    type: GET_ME_FAILED,
    payload: { error },
});

export {
    GetMe,
}