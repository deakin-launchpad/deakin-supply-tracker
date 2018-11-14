import React, { Component } from 'react';
import "./style.css";
import FlatButton from "components/FlatButton";

class Footer extends Component {
    changeDivClass() {
        let currPath = window.location.pathname;
        console.log(currPath);
        if (currPath === "/") {
            return "";
        } else if (currPath === "/farmer") {
            return "farmer";
        } else if (currPath === "/exporter") {
            return "exporter";
        } else if (currPath === "/importer") {
            return "importer";
        } else if (currPath === "/consumer") {
            return "consumer";
        }
    };

    rightBoxShouldShow() {
        if (this.changeDivClass() === "/") {
            console.log('if entered');
            return "footer-right-gone";
        } else {
            console.log('else entered');
            return "footer-right-box";
        }
    }
    render() {
        return (
            <div className={"footer footer-container " + this.changeDivClass()}>
                <div className="footer-left-box">
                    <div className="nav-wrapper">
                        <ul id="nav-mobile" className="left">
                            <li><FlatButton href={"/world"} text={"WORLD"}/></li>
                        </ul>
                    </div>
                </div>
                <div className={this.rightBoxShouldShow()}>
                    <div className="footer-right-box-item">Supplies&nbsp;</div>
                    <div className="footer-right-box-item"><FlatButton text=""/></div>
                </div>
            </div>
        );
    }
}

export default Footer;
