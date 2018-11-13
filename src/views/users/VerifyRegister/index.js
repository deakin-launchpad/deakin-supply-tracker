import React, { Component } from 'react';
import CenterCard from 'components/CenterCard';
import FlatButton from 'components/FlatButton';
import TextInput from 'components/TextInput';
import './style.css';
class VerifyRegister extends Component {
    render () {
        return (
            <CenterCard>
                        <div className="card-content white-text">
                            <p className="black-text left-align">
                                Please check the email you provided for a verification code
                            </p>
                            <TextInput id='code' placeholder='Enter the code'/>
                        </div>
                        <div className="card-action">
                            <FlatButton text='CANCEL'/>
                            <FlatButton text='VERIFY'/>
                        </div>
            </CenterCard>
        );
    }
}

export default VerifyRegister;
