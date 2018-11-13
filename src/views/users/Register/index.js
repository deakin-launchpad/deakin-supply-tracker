import React, { Component } from 'react';
import CenterCard from 'components/CenterCard';
import FlatButton from 'components/FlatButton';
import TextInput from 'components/TextInput';
import './style.css';
class SignUp extends Component {
    render () {
        return (
            <CenterCard>
                        <div className="card-content white-text">
                            <TextInput id='email'/>
                            <TextInput id='username'/>
                            <TextInput id='password' type='password'/>
                            <TextInput id='password' type='password' placeholder='Confirm password'/>
                        </div>
                        <div className="card-action">
                            <FlatButton href={'/user/login'} text={'BACK'}/>
                            <FlatButton href={'/'} text={'SIGN UP'}/>
                        </div>
            </CenterCard>
        );
    }
}

export default SignUp;
