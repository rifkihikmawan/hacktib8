import React, { Component } from 'react';
import { Redirect, Link } from "react-router-dom";
import { connect } from 'react-redux';

import "./css/login.css";

import {
    LoginActionCreator,
} from './../actions';

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
        }
    }

    handleLogin = () => {
        localStorage.setItem('page', 'signup');
        let { username, password } = this.state;
        this.props.login(username, password);
    }

    handleOnChangeText(text, state) {
        this.setState({
            [state]: text
        });
    };

    render() {
        let { isError } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h3 className="card-title text-center">SIGN UP</h3>
                                <h6 className="card-title text-center" style={{ fontSize: 14, color: 'red', fontWeight: 'bold' }}>{isError ? 'Harus diisi dengan benar !' : 'Silahkan isi form dengan benar'}</h6>
                                <form className="form-signin">
                                    <div className="form-label-group">
                                        <input type="text" id="inputUsername" className="form-control" placeholder={'USERNAME'} onChange={(e) => this.handleOnChangeText(e.target.value, 'username')} required autoFocus />
                                        <label htmlFor="inputUsername">Username</label>
                                    </div>
                                    <div className="form-label-group">
                                        <input type="password" id="inputPassword" className="form-control" placeholder={'PASSWORD'} onChange={(e) => this.handleOnChangeText(e.target.value, 'password')} required />
                                        <label htmlFor="inputPassword">Password</label>
                                    </div>

                                    <Link to={`/home`} onClick={() => this.handleLogin()} className="btn btn-lg btn-google btn-block text-uppercase">
                                        Sign up
                                    </Link>

                                    <hr className="my-4" />
                                    <Link to={`/`} className="btn btn-lg btn-primary btn-block text-uppercase">
                                        Sign in
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

        /* get state from reducer */
        /* state. nama reducer . nama state */
        username: state.login.username,
        password: state.login.password,
        isError: state.login.isError,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (username, password) => dispatch(LoginActionCreator.login(username, password)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
