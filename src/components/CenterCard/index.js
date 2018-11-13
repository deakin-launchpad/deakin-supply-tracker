import React, { Component } from 'react';
import './style.css';
class CenterCard extends Component {
    render () {
        return (
            <div className="center-card-container login-grid valign-wrapper row">
                <div className="col center-card-grid">
                    <div className="card white darken-1">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default CenterCard;
