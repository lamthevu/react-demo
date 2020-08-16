import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Logout } from "../../actions/authActions"
import { connect } from "react-redux";
import Storage from '../../store/localStore'
import { logout } from "../../services/authService";
import { toast } from "react-toastify";


class HeaderLogin extends Component {
    constructor(pops) {
        super(pops);
        this.logout = this.logout.bind(this);
    }

    componentDidUpdate() {
        const data = this.props.data;
        console.log(data);
        if (data) {
            if (data.error === 0) {
                Storage.removeToken();
                toast.success('Logout success !');
                setTimeout(() => {
                    window.location.href = '/login';
                }, 2000);
            } if (data.error !== 0){
                toast.error(data.message);
            }
        }
    }

    logout = (event) => {
        event.preventDefault();
        this.props.Logout()
    };

    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        </div>
                        <ul className="nav navbar-nav">
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <button onClick={this.logout} className='btn btn-outline-secondary'> Logout</button>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = state => (
    {
        data: state.logoutReducer.data,
        error: state.logoutReducer.error,
        loading: state.logoutReducer.loading,
    });

const mapDispatch = dispatch => ({
    Logout: () => dispatch(Logout())
});
export default connect(mapStateToProps, mapDispatch)(HeaderLogin);