import React, { Component } from 'react';
import { Redirect, Link } from "react-router-dom";
import { connect } from 'react-redux';

import "./css/login.css";

import {
    LoginActionCreator,
} from './../actions';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
        }
    }

    handleLogin = () => {
        this.props.ubahLogin(this.state.username, this.state.password);
    }

    handleOnChangeText(text, state) {
        this.setState({
            [state]: text
        });
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center">Sign In</h5>
                                <form className="form-signin">
                                    <div className="form-label-group">
                                        <input type="text" id="inputUsername" className="form-control" placeholder={'USERNAME'} onChange={(e) => this.handleOnChangeText(e.target.value, 'username')} required autofocus />
                                        <label for="inputUsername">Username</label>
                                    </div>
                                    <div className="form-label-group">
                                        <input type="password" id="inputPassword" className="form-control" placeholder={'PASSWORD'} onChange={(e) => this.handleOnChangeText(e.target.value, 'password')} required />
                                        <label for="inputPassword">Password</label>
                                    </div>

                                    <Link to="/home" onClick={() => this.handleLogin()} className="btn btn-lg btn-primary btn-block text-uppercase">
                                        Sign in
                                    </Link>

                                    <hr className="my-4" />
                                    <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2"></i> SIGN UP</button>
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
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        ubahLogin: (username, password) => dispatch(LoginActionCreator.ubahLogin(username, password)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
