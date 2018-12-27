import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Redirect, Link } from "react-router-dom";

import {
    Header,
    Content,
} from '../components';

import {
    HomeActionCreator,
} from './../actions';

class Home extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        let username = localStorage.getItem('username');
        let page = localStorage.getItem('page');
        if (username === null) {
            this.props.history.push(page);
        } else {
            this.props.getListData();
        }
    }

    render() {
        return (
            <div>
                <Header isLogin={this.props.username} />
                <Content data={this.props.data} />
            </div >
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
        getListData: () => dispatch(HomeActionCreator.getListData()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);