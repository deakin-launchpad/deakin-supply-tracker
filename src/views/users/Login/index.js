import React, { Component } from 'react';
import CenterCard from 'components/CenterCard';
import FlatButton from 'components/FlatButton/index';
import TextInput from 'components/TextInput/index';
import './style.css';
class Login extends Component {
    render () {
        return (
            <CenterCard>
                        <div className="card-content white-text">
                            <TextInput id='username'/>
                            <TextInput id='password' type='password'/>
                        </div>
                        <div className="card-action">
                            <FlatButton text={'LOGIN'}/>
                            <FlatButton href={'/user/register'} text={'SIGN UP'}/>
                        </div>
            </CenterCard>
        );
    }
}

export default Login;
