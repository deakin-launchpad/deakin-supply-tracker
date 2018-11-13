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
                            <TextInput id='first name'/>
                            <TextInput id='last name'/>
                            <TextInput id='email'/>
                            <TextInput id='role' placeholder="Role | 'CONSUMER' or 'EXPORTER' or 'FARMER' or 'IMPORTER'"/>
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
