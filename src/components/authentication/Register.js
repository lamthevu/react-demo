import React, { Component } from "react";
import { Register } from "../../actions/authActions";
import { connect } from "react-redux";
import Storage from '../../store/localStore';
import registerCss from "./register.css";
import SimpleReactValidator from 'simple-react-validator';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class RegisterUser extends Component {
    constructor(pops) {
        super(pops);
        this.state = {
            email: '',
            name: '',
            password: '',
        };
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.validator = new SimpleReactValidator();
    }


    handleChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    };

    handleChangeName = (e) => {
        this.setState({
            name: e.target.value
        })
    };

    handleChangePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    };

    componentDidUpdate(prevProps, prevState) {
        let data = this.props.user;
        console.log(data)
        if (this.state.password === prevState.password && this.state.email === prevState.email
            && this.state.name === prevState.name) {
            if (data) {
                if (data.error === 0) {
                    toast.success("Register success !");
                    Storage.setTokenHeader(data.data.token);

                    setTimeout(() => {
                        return this.props.history.push('/verify-code');
                    }, 5000);
                }
                if (data.error !== 0) toast.error(data.message);
            }
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        if (this.validator.allValid()) {
            const user = {
                email: this.state.email,
                name: this.state.name,
                password: this.state.password,
            };
            await this.props.registerFetch(user);
        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }

    };

    render() {
        const token = Storage.getToken();
        if (token) {
            this.props.history.push('/me')
        }
        return (
            <div className={ registerCss }>
                <div className="card bg-light">
                    <article className="card-body mx-auto register-wap">
                        <h4 className="card-title mt-3 text-center">Create Account</h4>
                        <p className="text-center">Get started with your free account</p>
                        <p>
                            <a href="" className="btn btn-block btn-facebook"> <i
                                className="fab fa-facebook-f"></i> Login
                                via
                                facebook</a>
                        </p>
                        <p className="divider-text">
                            <span className="bg-light">OR</span>
                        </p>
                        <form onSubmit={ this.handleSubmit }>
                            { this.validator.message('name', this.state.name,
                                'required',
                                { className: 'text-danger' }) }
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                                </div>
                                <input
                                    name="name"
                                    className="form-control"
                                    placeholder="Name"
                                    type="text"
                                    value={ this.state.name }
                                    onChange={ this.handleChangeName }
                                />
                            </div>
                            { this.validator.message('email', this.state.name,
                                'required',
                                { className: 'text-danger' }) }
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                                </div>
                                <input
                                    name="email"
                                    className="form-control"
                                    placeholder="Email address"
                                    type="email"
                                    value={ this.state.email }
                                    onChange={ this.handleChangeEmail }
                                />
                            </div>
                            { this.validator.message('password', this.state.name,
                                'required',
                                { className: 'text-danger' }) }
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                </div>
                                <input
                                    className="form-control"
                                    placeholder="Create password"
                                    type="password"
                                    value={ this.state.password }
                                    onChange={ this.handleChangePassword }
                                />
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Create Account" className="btn btn-primary btn-block"/>
                                <ToastContainer/>
                            </div>
                            <p className="text-center">Have an account? <a href="">Log In</a></p>
                        </form>
                    </article>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
        user: state.registerReducer.user,
        loading: state.registerReducer.loading,
        error: state.registerReducer.error,
        token: state.registerReducer.token,
    }
);

const mapDispatch = dispatch => ({
    registerFetch: user => dispatch(Register(user))
});
export default connect(mapStateToProps, mapDispatch)(RegisterUser);
