import React, {Component} from 'react'
import {Container, Row, Col, Wrap} from '../../components/Grid'
import NDIlogo from '../../img/ndi-logo.png'
import './Home.css'
import API from '../../utils/API'

class Home extends Component {
    state = {
    }

    render() {
        return (
            <div className="home-page text-center">
                <div className="pt-3">
                    <img src={NDIlogo} className="ndi-logo"/>
                </div>
                <div className="login-box">
                    <div className="my-5">
                        <h2><b>DemGame - Debate</b></h2>
                    </div>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Phone number" aria-label="Phone number" aria-describedby="basic-addon2"/>
                        <div className="input-group-append">
                            <a href="/game"><button className="btn" type="button">SIGN IN</button></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home