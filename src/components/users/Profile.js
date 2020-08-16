import React, { Component } from "react";
import profile from './profile.css'
import { Link } from "react-router-dom";
import { GetMe } from "../../actions/userAction"
import { connect } from "react-redux";
import HeaderLogin from '../header/HeaderLogin';
import Storage from '../../store/localStore';



class Profile extends Component {
    constructor(pops) {
        super(pops);
        this.state = {
            user: '',
        };
    }

    componentWillMount() {
        this.props.getMeFetch();
    }

    render() {
        let { email, name, id } = this.props;
        const token = Storage.getToken();
        if (!token) {
            this.props.history.push('/login')
        }
        return (
            <div>
                <HeaderLogin/>
            <div className={ profile }>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12">
                            <div className="card hovercard">
                                <div className="cardheader">
                                </div>
                                <div className="avatar">
                                    <img alt="" src="http://lorempixel.com/100/100/people/9/"/>
                                </div>
                                <div className="info">
                                    <div className="title">
                                        <Link to='/change-password'>Change password</Link>
                                    </div>
                                    <div className="desc">Name: {name}</div>
                                    <div className="desc">Email: {email}</div>
                                    <div className="desc">ID: {id}</div>
                                </div>
                                <div className="bottom">
                                    <a className="btn-primary btn-twitter btn-sm" href="https://twitter.com/webmaniac">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a className="btn-danger btn-sm" rel="publisher"
                                       href="https://plus.google.com/+ahmshahnuralam">
                                        <i className="fab fa-google-plus"></i>
                                    </a>
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

const mapStateToProps = state => (
    {
    id: state.getMeReducer.id,
    name: state.getMeReducer.name,
    email: state.getMeReducer.email,
    loading: state.getMeReducer.loading,
    error: state.getMeReducer.error,
});

const mapDispatch = dispatch => ({
    getMeFetch: () => dispatch(GetMe())
});
export default connect(mapStateToProps, mapDispatch)(Profile);