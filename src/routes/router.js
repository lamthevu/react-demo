import { Route, Router } from "react-router-dom";
import React, { Component } from "react";
import RegisterUser from "../components/authentication/Register"
import VerifyCodeRegister from "../components/verifyCode/VerifyCodeRegister";
import Login from "../components/authentication/Login";
import Profile from "../components/users/Profile";

class RouterApp extends Component {
    render() {
        return (
            <div>
                <div className="main-route-place">
                    <Route path="/register" component={RegisterUser} />
                    <Route path="/verify-code" component={VerifyCodeRegister} />
                    <Route path="/login" component={Login} />
                    <Route path="/me" component={Profile} />
                </div>
            </div>
        )
    }
}

export default RouterApp;

