import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";

import './Login.scss';
import { FormattedMessage } from 'react-intl';

import adminService from '../../services/adminService';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleOnChangeUsername = (event) => {
        this.setState({
            username: this.getValueInput(event)
        })
    }

    handleOnChangePassword = (event) => {
        this.setState({
            password: this.getValueInput(event)
        })
    }

    getValueInput = (event) => {
        return event.target.value
    }

    handleLogin = () => {
        console.log(this.state);
    }

    render() {

        return (
            <div className='login-background' >
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-login'>Login</div>
                        <div className='col-12 form-group login-input'>
                            <label>Username:</label>
                            <input
                                type='text'
                                className='form-control'
                                value={this.state.username}
                                onChange={(event) => this.handleOnChangeUsername(event)}
                                placeholder='Enter your username' />
                        </div>
                        <div className='col-12 form-group login-input'>
                            <label>Password:</label>
                            <div className='custom-input-password'>
                                <input
                                    type='text'
                                    className='form-control'
                                    value={this.state.password}
                                    onChange={(event) => this.handleOnChangePassword(event)}
                                    placeholder='Enter your password' />
                                <i className='far fa-eye' />
                            </div>
                        </div>
                        <div className='col-12'>
                            <button
                                className='btn-login'
                                onClick={() => this.handleLogin()}
                            >Login</button>
                        </div>
                        <div className='col-12'>
                            <span className='forgot-password'>Forgot your password</span>
                        </div>
                        <div className='col-12 text-center'>
                            <span className='text-other-login'>Or Login with:</span>
                        </div>
                        <div className='col-12 social-login'>
                            <i className='fab fa-google-plus-g google' />
                            <i className='fab fa-facebook-f facebook' />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);