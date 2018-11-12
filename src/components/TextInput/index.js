import React, { Component } from 'react';
import './style.css';

function capitalize(s) {
    return s && s[0].toUpperCase() + s.slice(1);
}

class TextInput extends Component {
    render() {
        let props = this.props;
        return (
            <div className="row">
                <div className="input-field col s12">
                    <input
                        id={props.id}
                        type={props.type ? props.type : 'text'}
                        className="validate"
                        placeholder={capitalize(props.placeholder ? props.placeholder : props.id)}
                    />
                </div>
            </div>
        );
    }
}

export default TextInput;
