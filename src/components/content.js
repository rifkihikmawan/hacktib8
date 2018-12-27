import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";

import mainLogo from './../logo.svg';
import "../pages/css/home.css";

class Content extends Component {
    constructor(props) {
        super(props);

    };

    render() {
        let nama = localStorage.getItem('username');
        let page = localStorage.getItem('page');
        return (
            <div className="container" style={{ marginTop: 25 }}>
                <div className="row">
                    <div className="col-sm-12">
                        <h3 className="card-title text-center">{page == 'signup' ? 'Selamat bergabung ' : 'Hallo '} : {nama}</h3>
                        <div className="row">
                            {this.props.data.map((datanya, index) => {
                                return (
                                    <div className="col-sm-4" style={{ marginBottom: 25 }} key={index}>
                                        <div className="card">
                                            <img className="card-img-top" src={mainLogo} alt="Card image" style={{ width: '100%' }} />
                                            <div className="card-body">
                                                <h4 className="card-title">{datanya.name}</h4>
                                                <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                                                <a href="#" className="btn btn-primary">See Profile</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
