import React, { Component } from "react";
import verifyCode from "./verifyCode.css";
import { Verify } from "../../actions/authActions"
import Storage from "../../store/localStore";
import { connect } from "react-redux";
import SimpleReactValidator from 'simple-react-validator';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class VerifyCodeRegister extends Component {
    constructor(pops) {
        super(pops);
        this.state = {
            code: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handelChangeCode = this.handelChangeCode.bind(this);
        this.validator = new SimpleReactValidator();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.code === prevState.code) {
            const data = this.props.data;
            if (data) {
                if (data.error === 0) {
                    Storage.removeTokenHeader();
                    toast.success('Verify code success !');
                    setTimeout(() => {
                        return this.props.history.push('/login');
                    }, 2000);
                }
                if (data.error !== 0) toast.error(data.message);
            }
        }
    }

    handelChangeCode = (e) => {
        this.setState({
            code: e.target.value,
        })
    };

    handleSubmit(event) {
        event.preventDefault();
        if (this.validator.allValid()) {
            const code = this.state.code;
            this.props.verifyFetch(code);
        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }
    }

    render() {
        const token = Storage.getToken();
        const tokenHeader = Storage.getTokenHeader();
        if (token || tokenHeader) {
            this.props.history.push('/me')
        }
        return (
            <div className={ verifyCode }>
                <div className="card verify-code">
                    <article className="card-body mx-auto register-wap">
                        <h4 className="card-title mt-3 text-center">Verify code</h4>
                        <form onSubmit={ this.handleSubmit }>
                            { this.validator.message('code', this.state.code,
                                'required',
                                { className: 'text-danger' }) }
                            <div className="form-group input-group">
                                <input
                                    name="code"
                                    className="form-control"
                                    placeholder="Code"
                                    type="text"
                                    value={ this.state.code }
                                    onChange={ this.handelChangeCode }
                                />
                                <br/>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Verify code" className="btn btn-primary btn-block"/>
                                <ToastContainer/>
                            </div>
                        </form>
                    </article>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
        data: state.verifyReducers.data,
        loading: state.verifyReducers.loading,
        error: state.verifyReducers.error,
    }
);

const mapDispatch = dispatch => ({
    verifyFetch: code => dispatch(Verify(code))
});
export default connect(mapStateToProps, mapDispatch)(VerifyCodeRegister);

