import { combineReducers } from "redux";
import { registerReducer } from "./registerReducer";
import { verifyReducers } from "./verifyRegister";
import { loginReducer } from "./loginReducer";
import { getMeReducer } from "./meReducer";
import { logoutReducer } from "./logoutReducer";

const rootReducer = combineReducers({
    registerReducer,
    verifyReducers,
    loginReducer,
    getMeReducer,
    logoutReducer,
});

export default rootReducer;
