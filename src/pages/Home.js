import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Redirect, Link } from "react-router-dom";

import {
    Header,
} from '../components';

import {
    LoginActionCreator,
    HomeActionCreator,
} from './../actions';

class Home extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.cekUsername();
        this.props.getListData();
    }

    cekUsername = () => {
        if (!this.props.username) {
            this.props.ubahUsername(localStorage.getItem('username'))
        }
    }

    handleLogout = () => {
        localStorage.removeItem('username');
    }

    render() {
        return (
            <div>
                <Header isLogin={this.props.username} />
                Hello admin {this.props.username}
                {this.props.data.map((datanya, index) => {
                    return (
                        <p key={index}>{datanya.name}</p>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

        /* get state from reducer */
        /* state. nama reducer . nama state */
        username: state.login.username,
        password: state.login.password,
        data: state.api.data,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        ubahUsername: (username) => dispatch(LoginActionCreator.ubahUsername(username)),
        getListData: () => dispatch(HomeActionCreator.getListData()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);