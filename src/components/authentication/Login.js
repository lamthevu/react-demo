import React, {Component} from "react";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import { Login } from "../../actions/authActions";
import { connect } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Storage from "../../store/localStore";

class LoginUser extends Component{
    constructor(pops) {
        super(pops);
        this.state= {
            email: '',
            password: '',
        };
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }


    componentDidUpdate(prevProps, prevState) {
        let data = this.props.data;
        if (this.state.password === prevState.password && this.state.email === prevState.email) {
            if (data) {
                if (data.error === 0) {
                    toast.success("Login success !");
                    Storage.setToken(data.data.token);
                    console.log(Storage.getToken());
                    setTimeout(() => {
                        return this.props.history.push('/me');
                    }, 2000);
                }if (data.error !== 0) toast.error(data.message);
            }
        }
    }

    handleChangeEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    };
    handleChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    };

    handleSubmit = (event) => {
      event.preventDefault();
      const user = {
          email: this.state.email,
          password: this.state.password
      };
      this.props.loginFetch(user);
    };
    render() {
        const token = Storage.getToken();
        if (token) {
            this.props.history.push('/me')
        }
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12 min-vh-100 d-flex flex-column justify-content-center">
                        <div className="row">
                            <div className="col-lg-6 col-md-8 mx-auto">

                                <div className="card rounded shadow shadow-sm">
                                    <div className="card-header">
                                        <h3 className="mb-0">Login</h3>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="form-group">
                                                <label htmlFor="uname1">Username</label>
                                                <input type="email"
                                                       className="form-control form-control-lg rounded-0"
                                                       name="email"
                                                       value={ this.state.name }
                                                       onChange={this.handleChangeEmail}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Password</label>
                                                <input
                                                    type="password"
                                                    className="form-control form-control-lg rounded-0"
                                                    value={this.state.password}
                                                    onChange={this.handleChangePassword}
                                                />
                                            </div>
                                            <input type="submit" className="btn btn-success"
                                                    id="btnLogin" value="Login"/>
                                            <ToastContainer/>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    data: state.loginReducer.data,
    loading: state.loginReducer.loading,
    error: state.loginReducer.error,
});

const mapDispatch = dispatch => ({
    loginFetch: user => dispatch(Login(user))
});

export default connect(mapStateToProps, mapDispatch)(LoginUser)